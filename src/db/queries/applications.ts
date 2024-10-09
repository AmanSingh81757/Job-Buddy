import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import { SelectApplication, applicationsTable } from "../schema";

export async function getUserApplicationsByEmail(
  email: SelectApplication["userEmail"]
): Promise<Array<SelectApplication>> {
  return db
    .select()
    .from(applicationsTable)
    .where(eq(applicationsTable.userEmail, email));
}
