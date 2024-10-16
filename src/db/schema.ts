import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userName: text("Username").notNull(),
  lastSignIn: timestamp("last_sign_in").notNull().defaultNow(),
  email: text("email").notNull().unique(),
  image: text("image").notNull(),
});

export const locationEnum = pgEnum("locationEnum", ["Onsite", "Remote"]);
export const categoryEnum = pgEnum("categoryEnum", [
  "Applied",
  "Bookmarked",
  "Interview",
  "Selected",
]);
export const statusEnum = pgEnum("statusEnum", [
  "Applied",
  "Shortlisted",
  "Interview",
  "Rejected",
  "Offered",
]);

export const applicationsTable = pgTable("applications_table", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().references(()=>usersTable.id),
  companyName: text("company_name").notNull(),
  role: text("role").notNull(),
  jobLink: text("job_link").notNull(),
  salary: text("salary").notNull(),
  location: locationEnum("location").notNull(),
  category: categoryEnum("category").notNull(),
  status: statusEnum("status").notNull(),
  appliedDate: timestamp("applied_date").notNull().defaultNow(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertApplication = typeof applicationsTable.$inferInsert;
export type SelectApplication = typeof applicationsTable.$inferSelect;
