import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Create a new inquiry
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const error = fromError(validatedData.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: error.message 
        });
      }

      const inquiry = await storage.createInquiry(validatedData.data);
      
      return res.status(201).json(inquiry);
    } catch (error) {
      console.error("Error creating inquiry:", error);
      return res.status(500).json({ error: "Failed to create inquiry" });
    }
  });

  // Get all inquiries (admin endpoint)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      return res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      return res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  // Get a single inquiry by ID
  app.get("/api/inquiries/:id", async (req, res) => {
    try {
      const inquiry = await storage.getInquiry(req.params.id);
      
      if (!inquiry) {
        return res.status(404).json({ error: "Inquiry not found" });
      }
      
      return res.json(inquiry);
    } catch (error) {
      console.error("Error fetching inquiry:", error);
      return res.status(500).json({ error: "Failed to fetch inquiry" });
    }
  });

  return httpServer;
}
