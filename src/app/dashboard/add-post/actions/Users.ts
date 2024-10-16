"use server"
import { InsertUser } from "@/db/schema"
import { createUser } from "@/db/queries/users"

export async function addUserAction(userData: FormData) {
    const rawUserData = {
        userName: userData.get("name") as string,
        email: userData.get("email") as string,
        image: userData.get("image") as string,
    }
    await createUser(rawUserData as InsertUser);
}