import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import { InsertUser, usersTable, SelectUser } from "@/db/schema";

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}

export async function getUserByEmail(
  email: SelectUser["email"]
): Promise<Array<SelectUser>> {
  return db.select().from(usersTable).where(eq(usersTable.email, email));
}
