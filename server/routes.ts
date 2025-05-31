import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { whopAPI } from "./whop-api";
import { setupWhopAuth } from "./whop-auth";
import { crmIntegration } from "./crm-integration";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup Whop authentication routes
  setupWhopAuth(app);

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      // For now, just return success response
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Whop API endpoints
  app.get("/api/whop/user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const userDetails = await whopAPI.getUserDetails(userId);
      res.json(userDetails);
    } catch (error) {
      console.error("Error fetching user details:", error);
      res.status(500).json({ message: "Failed to fetch user details" });
    }
  });

  app.get("/api/whop/subscriptions/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const subscriptions = await whopAPI.getUserSubscriptions(userId);
      res.json(subscriptions);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      res.status(500).json({ message: "Failed to fetch subscriptions" });
    }
  });

  app.get("/api/whop/products", async (req, res) => {
    try {
      const products = await whopAPI.getProducts();
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // CRM Integration endpoints
  app.get("/api/crm/user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const userProfile = await crmIntegration.getUserProfile(userId);
      res.json(userProfile);
    } catch (error) {
      console.error("Error fetching CRM user profile:", error);
      res.status(500).json({ message: "Failed to fetch user profile" });
    }
  });

  app.post("/api/crm/track-activity", async (req, res) => {
    try {
      await crmIntegration.trackActivity(req.body);
      res.json({ success: true });
    } catch (error) {
      console.error("Error tracking CRM activity:", error);
      res.status(500).json({ message: "Failed to track activity" });
    }
  });

  app.post("/api/crm/tutorial-complete", async (req, res) => {
    try {
      const { userId } = req.body;
      await crmIntegration.markTutorialComplete(userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking tutorial complete:", error);
      res.status(500).json({ message: "Failed to mark tutorial complete" });
    }
  });

  app.get("/api/crm/check-new-user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const isNewUser = await crmIntegration.checkIfNewUser(userId);
      res.json({ isNewUser });
    } catch (error) {
      console.error("Error checking if user is new:", error);
      res.status(500).json({ message: "Failed to check user status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
