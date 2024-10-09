"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Briefcase,
  Bookmark,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { ApplicationType } from "@/types/applicationType";
import { ApplicationsTab } from "./ApplicationsTab";

const tabOptions = [
  { value: "Applied", label: "Applied", icon: Briefcase },
  { value: "Bookmarked", label: "Bookmarked", icon: Bookmark },
  { value: "Interview", label: "Interview", icon: Calendar },
  { value: "Selected", label: "Selected", icon: CheckCircle },
];

export default function Applications({applications} : {applications: ApplicationType[]}) {
  const [activeTab, setActiveTab] = useState("Applied");

  const appliedApplications = applications.filter(
    (app) => app.category === "Applied"
  );
  const bookmarkedApplications = applications.filter(
    (app) => app.category === "Bookmarked"
  );
  const interviewApplications = applications.filter(
    (app) => app.category === "Interview"
  );
  const selectedApplications = applications.filter(
    (app) => app.category === "Selected"
  );

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
          {activeTab === "Applied" &&
            <ApplicationsTab applications={appliedApplications} activeTab={activeTab} />}
          {activeTab === "Bookmarked" &&
            <ApplicationsTab applications={bookmarkedApplications} activeTab={activeTab} />}
          {activeTab === "Interview" &&
            <ApplicationsTab applications={interviewApplications} activeTab={activeTab} />}
          {activeTab === "Selected" &&
            <ApplicationsTab applications={selectedApplications} activeTab={activeTab} />}
        </TabsContent>
      </Tabs>
    </>
  );
}
