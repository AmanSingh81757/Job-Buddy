import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import {
  InsertApplication,
  SelectApplication,
  applicationsTable,
} from "../schema";
import { revalidatePath } from "next/cache";

export async function getUserApplicationsByEmail(
  email: SelectApplication["userEmail"]
): Promise<Array<SelectApplication>> {
  return db
    .select()
    .from(applicationsTable)
    .where(eq(applicationsTable.userEmail, email));
}

export async function addApplication(data: InsertApplication) {
  await db.insert(applicationsTable).values(data);
}

export async function deleteApplication(applicationId: SelectApplication["id"]) {
  await db.delete(applicationsTable).where(eq(applicationsTable.id, applicationId));
}