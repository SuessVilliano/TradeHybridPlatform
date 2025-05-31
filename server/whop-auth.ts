import type { Express, Request, Response } from "express";
import session from "express-session";
import { whopAPI } from "./whop-api";

// Extend Express Request to include session data
declare module "express-session" {
  interface SessionData {
    whopUser?: {
      id: string;
      email: string;
      username: string;
      access_token: string;
    };
  }
}

export function setupWhopAuth(app: Express) {
  // Whop OAuth login endpoint
  app.get("/api/auth/whop", (req: Request, res: Response) => {
    const clientId = process.env.WHOP_CLIENT_ID;
    const redirectUri = `${req.protocol}://${req.get('host')}/api/auth/whop/callback`;
    
    const authUrl = `https://whop.com/oauth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=read_user read_memberships`;
    
    res.redirect(authUrl);
  });

  // Whop OAuth callback endpoint
  app.get("/api/auth/whop/callback", async (req: Request, res: Response) => {
    const { code, error } = req.query;

    if (error || !code) {
      return res.redirect("/dashboard?error=auth_failed");
    }

    try {
      // Exchange code for access token
      const response = await fetch("https://api.whop.com/api/v3/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.WHOP_CLIENT_ID,
          client_secret: process.env.WHOP_CLIENT_SECRET,
          code: code,
          grant_type: "authorization_code",
        }),
      });

      const tokenData = await response.json();

      if (!tokenData.access_token) {
        throw new Error("No access token received");
      }

      // Fetch user data
      const userResponse = await fetch("https://api.whop.com/api/v3/me", {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      });

      const userData = await userResponse.json();

      // Store user data in session
      req.session.whopUser = {
        id: userData.id,
        email: userData.email,
        username: userData.username,
        access_token: tokenData.access_token,
      };

      // Redirect to dashboard
      res.redirect("/dashboard?auth=success");
    } catch (error) {
      console.error("Whop OAuth error:", error);
      res.redirect("/dashboard?error=auth_failed");
    }
  });

  // Get current authenticated user
  app.get("/api/auth/whop/user", (req: Request, res: Response) => {
    if (!req.session.whopUser) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const { access_token, ...userData } = req.session.whopUser;
    res.json(userData);
  });

  // Logout endpoint
  app.post("/api/auth/whop/logout", (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Session destruction error:", err);
        return res.status(500).json({ error: "Logout failed" });
      }
      res.json({ success: true });
    });
  });

  // Protected Whop API endpoints that use user's access token
  app.get("/api/whop/user/subscriptions", async (req: Request, res: Response) => {
    if (!req.session.whopUser) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    try {
      const response = await fetch("https://api.whop.com/api/v3/me/memberships", {
        headers: {
          Authorization: `Bearer ${req.session.whopUser.access_token}`,
        },
      });

      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Error fetching user subscriptions:", error);
      res.status(500).json({ error: "Failed to fetch subscriptions" });
    }
  });
}