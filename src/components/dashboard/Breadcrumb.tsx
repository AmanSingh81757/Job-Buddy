"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, Menu } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  return (
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
              className={index === array.length - 1 ? "font-medium" : undefined}
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
          </div>
        ))}
    </div>
  );
}
