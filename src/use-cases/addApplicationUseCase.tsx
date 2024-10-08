import { z } from "zod";
import { AddApplicationFormType } from "@/types/applicationType";
import { addApplication } from "@/db/queries/insert";
import { InsertApplication } from "@/db/schema";

export async function addApplicationUseCase(values: AddApplicationFormType, userEmail: string | undefined | null) {
    if(!userEmail) {
        throw new Error("User not found");
    }
    const applicationToInsert = {
        ...values,
        appliedDate: new Date(),
        userEmail: userEmail,
    }
    const updatedApplicationToInsert = applicationToInsert as InsertApplication;
    const response = await addApplication(updatedApplicationToInsert);
    console.log(response);
};
