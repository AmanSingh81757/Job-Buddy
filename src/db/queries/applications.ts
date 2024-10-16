import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import {
  InsertApplication,
  SelectApplication,
  applicationsTable,
} from "../schema";

export async function getUserApplicationsById(
  user_id: SelectApplication["userId"]
): Promise<Array<SelectApplication>> {
  return db
    .select()
    .from(applicationsTable)
    .where(eq(applicationsTable.userId, user_id));
}

export async function addApplication(data: InsertApplication) {
  await db.insert(applicationsTable).values(data);
}

export async function deleteApplication(applicationId: SelectApplication["id"]) {
  await db.delete(applicationsTable).where(eq(applicationsTable.id, applicationId));
}