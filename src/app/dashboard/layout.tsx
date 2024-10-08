import type { Metadata } from "next";
import Sidebar from "@/components/dashboard/sidebar";
import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Job Buddy Dashboard",
  description: "Dashboard page for job buddy",
};

export default async function DashboardClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex h-screen overflow-hidden">
        <aside className="hidden w-64 border-r bg-gray-100/40 dark:bg-gray-800/40 md:block">
          <Sidebar />
        </aside>
        <section className="w-full min-h-screen flex-1">
          <DashboardHeader />
          <main className="flex-1 h-full overflow-y-auto p-4 md:p-6 bg-indigo-50">
            {children}
          </main>
        </section>
      </div>
    </SessionProvider>
  );
}
