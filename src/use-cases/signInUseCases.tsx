import { signIn } from "next-auth/react"

export const signInWithGithubUseCase = () => signIn("github")

export const signInWithGoogleUseCase = () => signIn("google")