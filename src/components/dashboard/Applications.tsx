"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Briefcase,
  Bookmark,
  Calendar,
  CheckCircle,
  PencilIcon,
  TrashIcon,
  SquareArrowOutUpRight,
  File,
  EllipsisVertical,
  EllipsisVerticalIcon,
} from "lucide-react";
import { ApplicationType, applicationSchema } from "@/types/applicationType";
import AddApplicationModal from "@/components/dashboard/AddApplicationForm";

const applications = [
  {
    id: "1",
    jobLink: "https://example.com/job1",
    role: "Software Engineer",
    companyName: "Tech Corp",
    salary: "$100,000 - $130,000",
    location: "Remote",
    status: "Applied",
    category: "applied",
    appliedDate: "2024-09-15",
  },
  {
    id: "2",
    jobLink: "https://example.com/job2",
    role: "Data Scientist",
    companyName: "Data Insights Inc",
    salary: "$90,000 - $120,000",
    location: "Onsite",
    status: "Shortlisted",
    category: "applied",
    appliedDate: "2024-09-16",
  },
  {
    id: "3",
    jobLink: "https://example.com/job2",
    role: "Data Scientist",
    companyName: "Data Insights Inc",
    salary: "$90,000 - $120,000",
    location: "Onsite",
    status: "Interview",
    category: "bookmarked",
    appliedDate: "2024-09-16",
  },
  {
    id: "3",
    jobLink: "https://example.com/job2",
    role: "SWE",
    companyName: "Google",
    salary: "$90,000 - $120,000",
    location: "Onsite",
    status: "Interview",
    category: "interview",
    appliedDate: "2024-09-16",
  },
  {
    id: "3",
    jobLink: "https://example.com/job2",
    role: "SWE",
    companyName: "Google",
    salary: "$90,000 - $120,000",
    location: "Onsite",
    status: "Rejected",
    category: "interview",
    appliedDate: "2024-09-16",
  },
  {
    id: "3",
    jobLink: "https://example.com/job2",
    role: "SWE",
    companyName: "Microsoft",
    salary: "$90,000 - $120,000",
    location: "Onsite",
    status: "Offered",
    category: "selected",
    appliedDate: "2024-09-16",
  },
];
const tabOptions = [
  { value: "applied", label: "Applied", icon: Briefcase },
  { value: "bookmarked", label: "Bookmarked", icon: Bookmark },
  { value: "interview", label: "Interview", icon: Calendar },
  { value: "selected", label: "Selected", icon: CheckCircle },
];

const validatedApplications = applicationSchema.array().parse(applications);

const appliedApplications = validatedApplications.filter(
  (app) => app.category === "applied"
);
const bookmarkedApplications = validatedApplications.filter(
  (app) => app.category === "bookmarked"
);
const interviewApplications = validatedApplications.filter(
  (app) => app.category === "interview"
);
const selectedApplications = validatedApplications.filter(
  (app) => app.category === "selected"
);

export default function Applications() {
  const [activeTab, setActiveTab] = useState("applied");

  const renderApplications = (apps: ApplicationType[], activeTab: string) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
        {apps.map((app: ApplicationType) => {
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
                    Applied On: {app.appliedDate}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="lg:hidden mb-4">
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {tabOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center">
                  <option.icon className="w-4 h-4 mr-2" />
                  {option.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tabs for medium and large screens */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full grid-cols-4 mb-4 bg-white bg-opacity-50 backdrop-blur-sm hidden lg:grid">
          {tabOptions.map((option) => (
            <TabsTrigger
              key={option.value}
              value={option.value}
              className="flex items-center justify-center data-[state=active]:bg-teal-500 data-[state=active]:text-white"
            >
              <option.icon className="w-4 h-4 mr-2" />
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeTab}>
          {activeTab === "applied" &&
            renderApplications(appliedApplications, activeTab)}
          {activeTab === "bookmarked" &&
            renderApplications(bookmarkedApplications, activeTab)}
          {activeTab === "interview" &&
            renderApplications(interviewApplications, activeTab)}
          {activeTab === "selected" &&
            renderApplications(selectedApplications, activeTab)}
        </TabsContent>
      </Tabs>
    </>
  );
}
