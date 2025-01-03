"use client";
import { useState } from 'react';
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
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <AddApplicationForm onClose={() => setOpen(false)}/>
      </DialogContent>
    </Dialog>
  );
}
