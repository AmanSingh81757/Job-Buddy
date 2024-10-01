"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side={"left"} className="px-1">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
