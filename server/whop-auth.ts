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
    
    if (!clientId) {
      console.error("WHOP_CLIENT_ID not configured");
      return res.status(500).json({ error: "OAuth not configured" });
    }
    
    const redirectUri = `${req.protocol}://${req.get('host')}/api/auth/whop/callback`;
    console.log("Whop OAuth redirect URI:", redirectUri);
    
    const authUrl = `https://whop.com/oauth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=read_user read_memberships`;
    console.log("Redirecting to Whop OAuth:", authUrl);
    
    res.redirect(authUrl);
  });

  // Whop OAuth callback endpoint
  app.get("/api/auth/whop/callback", async (req: Request, res: Response) => {
    console.log("Whop callback received:", req.query);
    const { code, error } = req.query;

    if (error || !code) {
      console.error("OAuth error or no code:", error);
      return res.redirect("/whop-test?error=auth_failed");
    }

    try {
      const clientId = process.env.WHOP_CLIENT_ID;
      const clientSecret = process.env.WHOP_CLIENT_SECRET;
      
      if (!clientId || !clientSecret) {
        throw new Error("Whop credentials not configured");
      }

      console.log("Exchanging code for token...");
      
      // Exchange code for access token
      const response = await fetch("https://api.whop.com/api/v3/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
          grant_type: "authorization_code",
        }),
      });

      const tokenData = await response.json();
      console.log("Token response:", tokenData);

      if (!tokenData.access_token) {
        throw new Error(`No access token received: ${JSON.stringify(tokenData)}`);
      }

      // Fetch user data
      console.log("Fetching user data...");
      const userResponse = await fetch("https://api.whop.com/api/v3/me", {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      });

      const userData = await userResponse.json();
      console.log("User data:", userData);

      // Store user data in session
      req.session.whopUser = {
        id: userData.id,
        email: userData.email,
        username: userData.username,
        access_token: tokenData.access_token,
      };

      console.log("Session saved, redirecting to test page");
      // Redirect to test page
      res.redirect("/whop-test?auth=success");
    } catch (error) {
      console.error("Whop OAuth error:", error);
      res.redirect("/whop-test?error=auth_failed");
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