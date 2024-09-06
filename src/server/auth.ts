import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { verify } from "argon2";
import { db } from "~/server/db";
import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(16),
});

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Find the user with the given email
        const creds = await loginSchema.parseAsync(credentials);

        const user = await db.user.findFirst({
          where: { email: creds.email },
        });

        if (!user) {
          throw new Error("No user found with this email");
        }

        // Check if the password is correct
        const isValidPassword = await verify(
          String(user.password),
          creds.password,
        );

        if (!isValidPassword) {
          throw new Error("Incorrect password");
        }

        // Return user object to be stored in the session
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = String(token.id); // Add the user ID to the session
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add the user ID to the token
      }
      return token;
    },
  },
  pages: {
    // signIn: "/auth/signin", // Optional: Customize the login page path
  },
  session: {
    strategy: "jwt",
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
