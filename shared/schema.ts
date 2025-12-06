import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact Inquiries
export const inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactPerson: text("contact_person").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  materialType: text("material_type").notNull(),
  quantity: text("quantity"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

// Product Types
export interface Product {
  id: string;
  name: string;
  category: "sand" | "stone" | "aggregates" | "salt";
  description: string;
  specifications: Record<string, string>;
  image: string;
  grade?: string;
  sizes?: string[];
}

export interface Project {
  id: string;
  name: string;
  client: string;
  location: string;
  description: string;
  materialsSupplied: string[];
  image: string;
  year: string;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}
