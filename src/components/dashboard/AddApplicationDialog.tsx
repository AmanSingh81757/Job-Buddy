import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { AddApplicationForm } from "./AddApplicationForm";

export default function AddApplicationDialog() {
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
        <AddApplicationForm />
      </DialogContent>
    </Dialog>
  );
}
