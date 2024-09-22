import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-r border-t border-teal-600 from-blue-50 to-teal-50 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © 2024 Job Buddy. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-600"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-600"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
