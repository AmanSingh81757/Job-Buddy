'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronRight, Menu} from 'lucide-react'
import Sidebar from '@/components/dashboard/sidebar'


export default function DashboardClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 border-r bg-gray-100/40 dark:bg-gray-800/40 md:block">
        <Sidebar />
      </aside>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex py-3.5 items-center gap-4 border-y bg-blue-300/10 px-4 dark:bg-gray-800/40 lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </SheetTrigger>
          </Sheet>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/dashboard" className="font-medium">
              Dashboard
            </Link>
            {pathname
              .split('/')
              .filter(Boolean)
              .slice(1)
              .map((segment, index, array) => (
                <div key={segment} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <Link
                    href={`/dashboard/${array.slice(0, index + 1).join('/')}`}
                    className={
                      index === array.length - 1 ? 'font-medium' : undefined
                    }
                  >
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </Link>
                </div>
              ))}
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 bg-indigo-50">{children}</main>
      </div>
    </div>
  )
}