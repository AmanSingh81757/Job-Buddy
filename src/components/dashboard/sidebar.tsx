import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, MessageCircle, FileText, HelpCircle, FolderOpen, PlusCircle } from "lucide-react";

const sidebarItems = [
  { name: "Applications", href: "/dashboard/applications", icon: Briefcase },
  { name: "Create Resume", href: "/dashboard/create-resume", icon: PlusCircle },
  { name: "Documents", href: "/dashboard/documents", icon: FolderOpen },
  { name: "Jobs", href: "/dashboard/jobs", icon: FileText },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Briefcase className="h-6 w-6" />
          <span>Job Buddy</span>
        </Link>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-2 p-4">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-gray-900 dark:hover:text-gray-50 ${
                  pathname === item.href
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4 p-2">
          <div className="h-12 w-12 rounded-full bg-slate-400" >Image Here</div>
          <div className="space-y-2">
            <div className="h-4 w-[150px] bg-slate-400" >Name Here</div>
          </div>
        </div>
          </div>
          <div className="flex items-center justify-around">
              <span className="flex gap-2">Help <HelpCircle className="h-6 w-6" /></span>
              <span className="flex gap-2">Feedback <MessageCircle className="h-6 w-6" /></span>
          </div>
    </div>
  );
}
