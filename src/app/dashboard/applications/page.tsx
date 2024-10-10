import AddApplicationDialog from "@/components/dashboard/AddApplicationDialog";
import Applications from "@/components/dashboard/Applications";
import { auth } from "@/../auth";
import { Suspense } from "react";
import { getUserApplicationsByEmailUseCase } from "@/use-cases/ApplicationUseCases";

export default async function ApplicationsPage() {
  const session = await auth();
  const applications = await getUserApplicationsByEmailUseCase(session?.user?.email as string);
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="flex flex-row justify-between mb-6 items-center">
        <h1 className="md:text-3xl text-xl font-bold text-gray-800">
          My Applications
        </h1>
        <AddApplicationDialog />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Applications applications={applications} />
      </Suspense>
    </div>
  );
}
