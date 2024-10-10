"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { addApplicationUseCase } from "@/use-cases/ApplicationUseCases";
import { useSession } from "next-auth/react"
import { AddApplicationFormSchema, AddApplicationFormType } from "@/types/applicationType";
import { Loader } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export function AddApplicationForm({ onClose }: { onClose: () => void }) {
  const { toast } = useToast()
  const { data: session } = useSession();
  const [pending, setPending] = useState(false);
  const form = useForm<AddApplicationFormType>({
    resolver: zodResolver(AddApplicationFormSchema),
    defaultValues: {
      companyName: "",
      role: "",
      jobLink: "",
      salary: "",
    },
  })

  async function onSubmit(values: AddApplicationFormType) {
    setPending(true);
    await addApplicationUseCase(values, session?.user?.email);
    form.reset();
    toast({
      variant: "success",
      title: "Application added successfully",
      description: `Application for ${values.companyName} has been added`,
    })
    onClose();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Google" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input placeholder="Software Engineer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Link</FormLabel>
              <FormControl>
                <Input placeholder="https://google.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input placeholder="100000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="Onsite">Onsite</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )} />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Application Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Applied">Applied</SelectItem>
                    <SelectItem value="Bookmarked">Bookmarked</SelectItem>
                    <SelectItem value="Interview">Interview</SelectItem>
                    <SelectItem value="Selected">Selected</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
          )} />

        <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Application Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Applied">Applied</SelectItem>
                    <SelectItem value="Interview">Interview</SelectItem>
                    <SelectItem value="Shortlisted">Shortlisted</SelectItem>
                    <SelectItem value="Offered">Offered</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )} />
        <Button type="submit" disabled={pending}>{pending && <Loader className="size-4" />}Submit{ pending && "ting"}</Button>
      </form>
    </Form>
  )
}