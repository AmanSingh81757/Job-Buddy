"use server";

import { AddApplicationFormType } from "@/types/applicationType";
import { InsertApplication, SelectApplication } from "@/db/schema";
import {
  deleteApplication,
  addApplication,
  getUserApplicationsById,
} from "@/db/queries/applications";
import { revalidatePath } from "next/cache";
import { auth } from "@/../auth";
import { getUserByEmail } from "@/db/queries/users";

export async function addApplicationUseCase(values: AddApplicationFormType) {
  const session = await auth();
  if (!session || !session.user?.email) {
    throw new Error("You must be logged in to submit an application")
  }
  const [user] = await getUserByEmail(session.user.email);
  if (!user) {
    throw new Error("User not found");
  }
  const applicationToInsert = {
    ...values,
    appliedDate: new Date(),
    userId: user.id,
  };
  const updatedApplicationToInsert = applicationToInsert as InsertApplication;
  try {
    const response = await addApplication(updatedApplicationToInsert);
  } catch (error) {
    console.error("Error adding application", error);
  }
  revalidatePath("/dashboard/applications");
}

export async function getUserApplicationsUseCase() {
  const session = await auth();
  try {
    const applications = await getUserApplicationsById(session?.user?.id as string);
    return applications;
  } catch (error) {
    console.error("Error getting applications", error);
  }
}

export async function deleteApplicationUseCase(
  applicationId: SelectApplication["id"]
) {
  try {
    const response = await deleteApplication(applicationId);
    revalidatePath("/dashboard/applications");
  } catch (error) {
    console.error("Error deleting application", error);
  }
}
