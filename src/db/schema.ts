import { integer, pgTable, serial, text, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
});

export const postsTable = pgTable('posts_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const locationEnum = pgEnum('locationEnum', ['Onsite', 'Remote']);
export const categoryEnum = pgEnum('categoryEnum', ["Applied", "Bookmarked", "Interview", "Selected"]);
export const statusEnum = pgEnum('statusEnum', ["Applied", "Shortlisted", "Interview", "Rejected", "Offered"]);

export const applicationsTable = pgTable('applications_table', {
  id: serial('id').primaryKey(),
  userEmail: text('user_email').notNull(),
  companyName: text('company_name').notNull(),
  role: text('role').notNull(),
  jobLink: text('job_link').notNull(),
  salary: text('salary').notNull(),
  location: locationEnum('location').notNull(),
  category: categoryEnum('category').notNull(),
  status: statusEnum('status').notNull(),
  appliedDate: timestamp('applied_date').notNull().defaultNow(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;

export type InsertApplication = typeof applicationsTable.$inferInsert;
export type SelectApplication = typeof applicationsTable.$inferSelect;