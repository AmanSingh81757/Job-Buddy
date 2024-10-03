"use server"
import { signIn } from "next-auth/react";

export async function signInWithGithubAction() {
    await signIn("github");
}

export async function signInWithGoogleAction() {
    await signIn("google");
}