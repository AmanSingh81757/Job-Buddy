import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Briefcase, Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center w-full z-10 bg-white/80 backdrop-blur-sm justify-between border-b border-indigo-300">
      <Link className="flex items-center justify-center" href="#">
        <Briefcase className="h-6 w-6 mr-2 text-teal-600" />
        <span className="font-bold text-teal-600">Job Buddy</span>
      </Link>
      <nav className="gap-4 sm:gap-6 hidden lg:flex">
        <Link
          className="text-sm font-semibold hover:text-teal-600 transition-colors"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-semibold hover:text-teal-600 transition-colors"
          href="#using"
        >
          Using
        </Link>
        <Link
          className="text-sm font-semibold hover:text-teal-600 transition-colors"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-semibold hover:text-teal-600 transition-colors"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
      <div className="flex gap-5 items-center">
        <Link href={"/login"}>
          <Button className="bg-teal-600 text-white hover:bg-teal-700">
            Log In
          </Button>
        </Link>
        <Link className="hidden md:block" href={"https://github.com"}>
          <Github />
        </Link>
      </div>
    </header>
  );
}
