"use client";

import { usePathname } from "next/navigation";
import {
  Briefcase,
  MessageCircle,
  FileText,
  HelpCircle,
  FolderOpen,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
const sidebarItems = [
  { name: "Applications", href: "/dashboard/applications", icon: Briefcase },
  { name: "Create Resume", href: "/dashboard/create-resume", icon: PlusCircle },
  { name: "Documents", href: "/dashboard/documents", icon: FolderOpen },
  { name: "Jobs", href: "/dashboard/jobs", icon: FileText },
];

export default function SidebarMenu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-2 p-4">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-md transition-all hover:text-black hover:bg-indigo-100 dark:hover:text-gray-50 ${
                pathname === item.href
                  ? "bg-indigo-100/80 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
