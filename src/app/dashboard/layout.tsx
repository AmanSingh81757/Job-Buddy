import type { Metadata } from "next";
import Sidebar from '@/components/dashboard/sidebar'
import DashboardHeader from '@/components/dashboard/dashboardHeader'

export const metadata: Metadata = {
  title: "Job Buddy auth",
  description: "authentication page for job buddy",
};


export default async function DashboardClient({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 border-r bg-gray-100/40 dark:bg-gray-800/40 md:block">
        <Sidebar />
      </aside>
      <DashboardHeader>{children}</DashboardHeader>
    </div>
  )
}