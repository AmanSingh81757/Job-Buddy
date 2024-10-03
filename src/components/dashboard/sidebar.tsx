"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, MessageCircle, HelpCircle } from "lucide-react";
import SidebarMenu from "./sidebarMenu";
import { useSession, signOut } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();
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
        <div className="flex items-center cursor-pointer bg-slate-200/50 space-x-4 px-2 py-1">
          <div className="h-10 w-10 text-black text-2xl justify-center items-center">
            <img
              src={session?.user?.image as string}
              className="rounded-full"
            ></img>
          </div>
          <div className="items-center flex justify-center">
            <div className="h-8 w-[150px] text-center flex items-center justify-center text-sm pt-1">
              {session?.user?.name}
            </div>
          </div>
        </div>
      </SidebarMenu>
      <div className="flex items-center justify-around my-2 text-sm">
        <Button onClick={() => signOut()}>Sign Out</Button>
        <Button variant="outline" className="border-black">
          Feedback <MessageCircle className="ml-2 size-5" />
        </Button>
      </div>
    </div>
  );
}
