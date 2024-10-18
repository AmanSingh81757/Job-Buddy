import NextAuth, { DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import { eq } from "drizzle-orm";
import { db } from "@/db/index";
import { usersTable } from "@/db/schema";
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id: string;
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github, Google],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.userId = user.id as string;
      }
      return token;
    },
    async signIn({ user, account, profile }) {
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
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
})