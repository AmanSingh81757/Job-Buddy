import { ApplicationType } from "@/types/applicationType";
import { ApplicationCard } from "./ApplicationCard";

export function ApplicationsTab({
  applications,
  activeTab,
}: {
  applications: ApplicationType[];
  activeTab: string;
}) {
  return (
    <section>
      <h1 className="p-2 text-3xl font-mono font-bold">
        {applications.length === 0 ? "Sorry, No" : `${applications.length}`}{" "}
        {activeTab} applications found
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
        {applications.map((applications: ApplicationType) => {
          if (applications.category !== activeTab) return null;
          return <ApplicationCard key={applications.id} application={applications} />;
        })}
      </div>
    </section>
  );
}
