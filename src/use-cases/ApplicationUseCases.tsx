"use server";

import { AddApplicationFormType } from "@/types/applicationType";
import { InsertApplication, SelectApplication } from "@/db/schema";
import {
  getUserApplicationsByEmail,
  deleteApplication,
  addApplication,
} from "@/db/queries/applications";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";

export async function addApplicationUseCase(
  values: AddApplicationFormType,
  userEmail: string | undefined | null
) {
  if (!userEmail) {
    throw new Error("User not found");
  }
  const applicationToInsert = {
    ...values,
    appliedDate: new Date(),
    userEmail: userEmail,
  };
  const updatedApplicationToInsert = applicationToInsert as InsertApplication;
  try {
    const response = await addApplication(updatedApplicationToInsert);
  } catch (error) {
    console.error("Error adding application", error);
  }
  revalidatePath("/dashboard/applications");
}

export async function getUserApplicationsByEmailUseCase(
  userEmail: SelectApplication["userEmail"]
) {
  try {
    const applications = await getUserApplicationsByEmail(userEmail);
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
