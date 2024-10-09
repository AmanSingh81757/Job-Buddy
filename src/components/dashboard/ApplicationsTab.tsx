import { ApplicationType } from "@/types/applicationType";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  SquareArrowOutUpRight,
  File,
  PencilIcon,
  TrashIcon,
  EllipsisVerticalIcon,
} from "lucide-react";

export function ApplicationsTab({
  applications,
  activeTab,
}: {
  applications: ApplicationType[];
  activeTab: string;
}) {
  return (
    <section>
      <h1 className="p-2 text-3xl font-mono font-bold">
        {applications.length === 0 ? "Sorry, No" : `${applications.length}`}{" "}
        {activeTab} applications found
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
        {applications.map((app: any) => {
          if (app.category !== activeTab) return null;
          return (
            <Card
              key={app.id}
              className="mb-4 bg-white bg-opacity-80 backdrop-blur-sm"
            >
              <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-gray-800">
                    <Link
                      className={"flex flex-row group hover:underline"}
                      href={app.jobLink}
                    >
                      {app.companyName}{" "}
                      <SquareArrowOutUpRight className="ml-1 size-4 hidden group-hover:block" />
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-teal-600">
                    {app.role}
                  </CardDescription>
                </div>
                <div className="flex-row justify-around gap-4 hidden md:flex">
                  <File className="size-5 cursor-pointer text-green-500" />
                  <PencilIcon className="size-5 cursor-pointer text-blue-500" />
                  <TrashIcon className="size-5 cursor-pointer text-red-600" />
                </div>
                <div className="block md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <EllipsisVerticalIcon className="size-5 cursor-pointer text-gray-500" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-10 -translate-x-16">
                      <DropdownMenuItem className="gap-2">
                        <File className="size-5 cursor-pointer text-green-500" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <PencilIcon className="size-5 cursor-pointer text-blue-500" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <TrashIcon className="size-5 cursor-pointer text-red-600" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge
                    variant="secondary"
                    className={
                      app.status === "Applied"
                        ? "bg-blue-100 text-blue-800"
                        : app.status === "Interview"
                        ? "bg-yellow-100 text-yellow-800"
                        : app.status === "Shortlisted"
                        ? "bg-green-100 text-green-800"
                        : app.status === "Offered"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {app.status}
                  </Badge>
                  <span className="text-xs text-gray-600">
                    Applied On: {app.appliedDate?.toLocaleDateString("en-GB")}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
