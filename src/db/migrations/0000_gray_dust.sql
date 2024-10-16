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
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" text PRIMARY KEY NOT NULL,
	"Username" text NOT NULL,
	"last_sign_in" timestamp DEFAULT now() NOT NULL,
	"email" text NOT NULL,
	"image" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
