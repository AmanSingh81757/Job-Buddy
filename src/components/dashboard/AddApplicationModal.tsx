import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

function ApplicationFormInput({ label, name, type, placeholder }: { label: string; name: string, type: string, placeholder?: string }) {
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium text-gray-700">
        {name}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        className="block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
}

function ApplicationFormSelect({ label, name, options }: { label: string; name: string, options: string[] }) {
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium text-black">
        {name}
      </label>
      <Select name={label}>
        <SelectTrigger className="w-full mt-1">
          <SelectValue placeholder={`Select ${name}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default function AddApplicationModal() {
  return (
    <Dialog>
      <DialogTrigger className="">
        <div className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-md">
          Add <PlusIcon className="size-4 font-bold inline-block" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Application</DialogTitle>
          <DialogDescription>
            Add a new application to track your job search progress.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="grid grid-cols-1 gap-4">
            <ApplicationFormInput label="companyName" name="Company Name" type="text" placeholder="Google"/>
            <ApplicationFormInput label="role" name="Role" type="text" placeholder="SWE"/>
            <ApplicationFormInput label="jobLink" name="Job Link" type="url" placeholder="www.linkedin.com/jobs/123"/>
            <ApplicationFormInput label="salary" name="Salary" type="text" placeholder="₹ 12,00,000"/>
            {/* add some more fields here */}
            <ApplicationFormSelect label="location" name="Location" options={["Onsite", "Remote"]} />
            <ApplicationFormSelect label="category" name="Category" options={["Applied", "Bookmarked"]} /></div>
          <div className="mt-4 flex justify-end">
            <Button
              className="bg-teal-600 text-white hover:bg-teal-700"
              type="submit"
              onClick={(e)=>{e.preventDefault()}}
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
