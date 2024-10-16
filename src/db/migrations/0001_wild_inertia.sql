ALTER TABLE "applications_table" RENAME COLUMN "user_email" TO "user_id";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "applications_table" ADD CONSTRAINT "applications_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
