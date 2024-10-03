"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";

export default function SignUpPage() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-tl from-purple-100 to-blue-100 p-5">
      <Card className="shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form className="grid gap-4">
          <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Full Name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="password" />
            </div>
            <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">
              Create account
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-5">
          <p>
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline font-bold text-teal-600 hover:text-teal-700"
            >
              Log In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
