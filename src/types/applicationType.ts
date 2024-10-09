import { z } from "zod";

export const applicationSchema = z.object({
  id: z.number(),
  jobLink: z.string().url(),
  role: z.string(),
  companyName: z.string(),
  salary: z.string(),
  location: z.enum(["Remote", "Onsite"]),
  category: z.enum(["Applied", "Bookmarked", "Interview", "Selected"]),
  status: z.enum([
    "Applied",
    "Interview",
    "Shortlisted",
    "Offered",
    "Rejected",
  ]),
  appliedDate: z.date().optional(),
});

export const AddApplicationFormSchema = z.object({
  companyName: z.string().min(1).max(50),
  role: z.string().min(1).max(50),
  jobLink: z.string().url(),
  salary: z.string().min(1).max(50),
  location: z.string({ required_error: "Location is required" }),
  category: z.string({ required_error: "Category is required" }),
  status: z.string({ required_error: "Status is required" }),
});

export type ApplicationType = z.infer<typeof applicationSchema>;
export type AddApplicationFormType = z.infer<typeof AddApplicationFormSchema>;
