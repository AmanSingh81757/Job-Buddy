import Breadcrumb from "./Breadcrumb";
import { MobileSidebar } from "./mobile-sidebar";
import ProfileCard from "./ProfileCard";

export default function DashboardHeader() {
  return (
    <>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex justify-between items-center gap-4 border-y bg-blue-300/10 px-4 dark:bg-gray-800/40 lg:px-6">
          <div>
            <MobileSidebar />
            <Breadcrumb />
          </div>
          <ProfileCard />
        </header>
      </div>
    </>
  );
}
