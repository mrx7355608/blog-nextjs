import { BlogModel } from "@/lib/models";
import Joi from "joi";
import { NextResponse } from "next/server";
import validator from "validator";
import slugify from "slugify";
import { connectDB } from "@/lib/db";
import blogValidationSchema from "@/lib/validators";
import { cookies } from "next/headers";

function sendResponse(message, statusCode) {
    return NextResponse.json(message, {
        status: statusCode,
    });
}

export async function PATCH(request, { params }) {
    try {
        // 1. Authenticate request
        const authCookie = cookies().get("authjs.session-token");
        if (!authCookie) {
            return sendResponse({ error: "Not authenticated" }, 401);
        }

        const authToken = authCookie.value;
        if (!authToken) {
            return sendResponse({ error: "Not authenticated" }, 401);
        }

        // 2. Validate blog id
        const { id } = params;
        if (!id) {
            return sendResponse({ error: "Blog ID is missing" }, 400);
        }
        if (!validator.isMongoId(id)) {
            return sendResponse({ error: "Invalid blog id" }, 400);
        }

        // 3. Check if blog exists
        const blog = await BlogModel.findById(id);
        if (!blog) {
            return sendResponse({ error: "Blog not found" }, 404);
        }

        // 4. Validate new changes
        const data = await request.json();
        if (!data) {
            return sendResponse({ error: "Updated data is missing" }, 400);
        }
        const { error } = blogValidationSchema.validate(data);
        if (error) throw error;

        // 5. Update slug
        const blogObject = Object.assign(data, { slug: slugify(data.title) });

        // 6. Update blog in database
        await connectDB();
        await BlogModel.findByIdAndUpdate(id, blogObject);

        // 7. Send response back to client
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    } catch (err) {
        console.log(err.message);
        if (err instanceof Joi.ValidationError) {
            return sendResponse({ error: err.message }, 400);
        } else {
            return sendResponse({ error: "Something went wrong" }, 500);
        }
    }
}
