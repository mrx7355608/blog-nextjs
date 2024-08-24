import NextAuth from "next-auth";
import { authConfig } from "../auth.config";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./lib/db";
import bcrypt from "bcryptjs";
import { UserModel } from "./lib/models";

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                await connectDB();
                const email = credentials.email;
                const password = credentials.password;

                // 1. Check if credentials are provided
                if (!email) return null;
                if (!password) return null;

                // 2. Check if user exists
                const user = await UserModel.findOne({ email });
                if (!user) return null;

                // 3. Verify password
                const isValidPassword = await bcrypt.compare(
                    password,
                    user.password,
                );
                if (!isValidPassword) return null;

                // 4. Return user indicating a successful login
                return user;
            },
        }),
    ],
});
