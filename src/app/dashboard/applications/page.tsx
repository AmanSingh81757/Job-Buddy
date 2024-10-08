import AddApplicationDialog from "@/components/dashboard/AddApplicationDialog";
import Applications from "@/components/dashboard/Applications";


export default function ApplicationsPage() {

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="flex flex-row justify-between mb-6 items-center">
        <h1 className="md:text-3xl text-xl font-bold text-gray-800">
          My Applications
        </h1>
        <AddApplicationDialog />
      </div>
      <Applications />

      {/* Content for both small and large screens */}
    </div>
  );
}
