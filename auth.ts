import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import { eq } from "drizzle-orm";
import { db } from "@/db/index";
import { usersTable } from "@/db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github, Google],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
    async signIn({ user, account, profile }) {
      console.log("user: ", user)
      console.log("account: ", account)
      console.log("profile: ", profile)
      user.id = user.id;
      if (account?.provider === "google" || account?.provider === "github") {
        const userExists = await db.select().from(usersTable).where(eq(usersTable.email, user.email as string));
        if(userExists.length === 1) return true;
        try {
          await db
            .insert(usersTable)
            .values({
              id: user.id as string,
              email: user.email as string,
              userName: user.name as string,
              image: user.image as string,
            });
          return true;
        } catch (error) {
          console.error("Error inserting user:", error);
          return false;
        }
      }
      return true;
    },
  },
})