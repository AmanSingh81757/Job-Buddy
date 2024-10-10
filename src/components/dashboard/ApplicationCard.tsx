import { ApplicationType } from "@/types/applicationType"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SquareArrowOutUpRight, PencilIcon, TrashIcon, EllipsisVerticalIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { deleteApplicationUseCase } from "@/use-cases/ApplicationUseCases"

export function ApplicationCard({ application }: { application: ApplicationType }) {
    return (
        <Card
              className="mb-4 bg-white bg-opacity-80 backdrop-blur-sm"
            >
              <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-gray-800">
                    <Link
                      className={"flex flex-row group hover:underline"}
                      href={application.jobLink}
                    >
                      {application.companyName}{" "}
                      <SquareArrowOutUpRight className="ml-1 size-4 hidden group-hover:block" />
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-teal-600">
                    {application.role}
                  </CardDescription>
                </div>
                <div className="flex-row justify-around gap-4 hidden md:flex">
                  <PencilIcon className="size-5 cursor-pointer text-blue-500" />
                  <TrashIcon onClick={()=>deleteApplicationUseCase(application.id)} className="size-5 cursor-pointer text-red-600" />
                </div>
                <div className="block md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <EllipsisVerticalIcon className="size-5 cursor-pointer text-gray-500" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-10 -translate-x-16">
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
                      application.status === "Applied"
                        ? "bg-blue-100 text-blue-800"
                        : application.status === "Interview"
                        ? "bg-yellow-100 text-yellow-800"
                        : application.status === "Shortlisted"
                        ? "bg-green-100 text-green-800"
                        : application.status === "Offered"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {application.status}
                  </Badge>
                  <span className="text-xs text-gray-600">
                    Applied On: {application.appliedDate?.toLocaleDateString("en-GB")}
                  </span>
                </div>
              </CardContent>
            </Card>
    )
}