import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { whopAPI } from "./whop-api";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);
  return httpServer;
}
