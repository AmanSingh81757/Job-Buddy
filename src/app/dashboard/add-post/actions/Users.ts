"use server"
import { InsertUser } from "@/db/schema"
import { createUser } from "@/db/queries/insert"

export async function addUserAction(userData: FormData) {
    const rawUserData = {
        name: userData.get("name") as string,
        email: userData.get("email") as string,
        age: userData.get("age") as unknown as number,
    }
    await createUser(rawUserData as InsertUser);
}