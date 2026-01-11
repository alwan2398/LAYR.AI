import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  full_name: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  image_url: text("image_url"),
  credits: integer("credits").notNull().default(3),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});

// Inference buat typescript
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
