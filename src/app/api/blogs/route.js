import Joi from "joi";
import { connectDB } from "@/lib/db";
import { BlogModel } from "@/lib/models";
import blogValidationSchema from "@/lib/validators";
import slugify from "slugify";
import { NextResponse } from "next/server";

function sendResponse(message, statusCode) {
    return NextResponse.json(message, {
        status: statusCode,
    });
}

export async function POST(request) {
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

        // 2. Extract data from request
        const data = await request.json();

        // 3. Validate blog data
        const { error } = blogValidationSchema.validate(data);
        if (error) throw error;

        // 4. Create a blog object with slug
        const blogObject = Object.assign(data, { slug: slugify(data.title) });

        // 5. Save blog in database
        await connectDB();
        await BlogModel.create(blogObject);

        // 6. Send response back to client
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
