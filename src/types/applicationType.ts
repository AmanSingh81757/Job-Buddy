import { z } from "zod";

export const applicationSchema = z.object({
    id: z.string(),
    jobLink: z.string().url(),
    role: z.string(),
    companyName: z.string(),
    salary: z.string(),
    location: z.enum(["Remote", "Onsite"]),
    category: z.enum(["applied", "bookmarked", "interview", "selected"]),
    status: z.enum(["Applied", "Interview", "Shortlisted", "Offered", "Rejected"]),
    appliedDate: z.string(),
});

export type ApplicationType = z.infer<typeof applicationSchema>;