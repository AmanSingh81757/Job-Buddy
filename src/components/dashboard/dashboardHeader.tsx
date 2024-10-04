"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, Menu } from "lucide-react";
import Sidebar from "@/components/dashboard/sidebar";
import { MobileSidebar } from "./mobile-sidebar";
import ProfileCard from "./ProfileCard";
export default function DashboardHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex justify-between items-center gap-4 border-y bg-blue-300/10 px-4 dark:bg-gray-800/40 lg:px-6">
          <div>
            <MobileSidebar />
            <div className="flex items-center gap-2 text-sm">
              <Link href="/dashboard" className="font-medium">
                Dashboard
              </Link>
              {pathname
                .split("/")
                .filter(Boolean)
                .slice(1)
                .map((segment, index, array) => (
                  <div key={segment} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    <Link
                      href={`/dashboard/${array.slice(0, index + 1).join("/")}`}
                      className={
                        index === array.length - 1 ? "font-medium" : undefined
                      }
                    >
                      {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <ProfileCard />
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-indigo-50">
          {children}
        </main>
      </div>
    </>
  );
}
