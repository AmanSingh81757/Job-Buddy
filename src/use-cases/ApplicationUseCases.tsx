"use server";

import { AddApplicationFormType } from "@/types/applicationType";
import { InsertApplication, SelectApplication } from "@/db/schema";
import {
  deleteApplication,
  addApplication,
  getUserApplicationsById,
} from "@/db/queries/applications";
import { revalidatePath } from "next/cache";

export async function addApplicationUseCase(
  values: AddApplicationFormType,
  user_id: string | undefined | null
) {
  if (!user_id) {
    throw new Error("User not found");
  }
  const applicationToInsert = {
    ...values,
    appliedDate: new Date(),
    userId: user_id,
  };
  const updatedApplicationToInsert = applicationToInsert as InsertApplication;
  try {
    const response = await addApplication(updatedApplicationToInsert);
  } catch (error) {
    console.error("Error adding application", error);
  }
  revalidatePath("/dashboard/applications");
}

export async function getUserApplicationsByIdUseCase(
  user_id: SelectApplication["userId"]
) {
  try {
    const applications = await getUserApplicationsById(user_id);
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
