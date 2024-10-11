DO $$ BEGIN
 CREATE TYPE "public"."categoryEnum" AS ENUM('Applied', 'Bookmarked', 'Interview', 'Selected');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."locationEnum" AS ENUM('Onsite', 'Remote');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."statusEnum" AS ENUM('Applied', 'Shortlisted', 'Interview', 'Rejected', 'Offered');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "applications_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_email" text NOT NULL,
	"company_name" text NOT NULL,
	"role" text NOT NULL,
	"job_link" text NOT NULL,
	"salary" text NOT NULL,
	"location" "locationEnum" NOT NULL,
	"category" "categoryEnum" NOT NULL,
	"status" "statusEnum" NOT NULL,
	"applied_date" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"last_sign_in" timestamp DEFAULT now() NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_table" ADD CONSTRAINT "posts_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
