
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, MessageCircle, HelpCircle } from "lucide-react";
import SidebarMenu from "./sidebarMenu";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center border-b px-6 py-3 justify-between w-full">
        <Link
          className="flex items-center w-fit mx-auto gap-2 font-semibold"
          href="/"
        >
          <Briefcase className="h-6 w-6" />
          <span>Job Buddy</span>
        </Link>
      </div>
      <SidebarMenu>
        <div className="flex items-center cursor-pointer hover:bg-slate-50 space-x-4 px-2 py-1">
          <div className="h-10 w-10 rounded-full bg-slate-100 text-black text-2xl text-center items-center pt-1">
            A
          </div>
          <div className="space-y-2">
            <div className="h-8 w-[150px] text-center text-sm pt-1">
              Aman Singh
            </div>
          </div>
        </div>
      </SidebarMenu>
      <div className="flex items-center justify-around my-2 text-sm">
        <form>
          <Button>Sign Out</Button>
        </form>
        <Button variant="outline" className="border-black">Feedback <MessageCircle className="ml-2 size-5" /></Button>
      </div>
    </div>
  );
}
