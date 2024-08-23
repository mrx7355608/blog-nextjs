"use server";

import { connectDB } from "@/lib/db";
import { UserModel } from "@/lib/models";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginUser(prevState, formData) {
    await connectDB();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email) {
        return { message: "Email is required!" };
    }
    if (!password) {
        return { message: "Password is required!" };
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
        return { message: "Incorrect email or password" };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return { message: "Incorrect email or password" };
    }

    console.log("redirecting...");
    redirect("/dashboard");
}
