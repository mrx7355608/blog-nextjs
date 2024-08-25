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
        const data = await request.json();

        // 1. Validate blog data
        const { error } = blogValidationSchema.validate(data);
        if (error) throw error;

        // 2. Create a blog object with slug
        const blogObject = Object.assign(data, { slug: slugify(data.title) });

        // 3. Save blog in database
        await connectDB();
        await BlogModel.create(blogObject);

        // 4. Send response back to client
        return sendResponse({ message: "Blog created successfully" }, 201);
    } catch (err) {
        console.log(err.message);
        if (err instanceof Joi.ValidationError) {
            return sendResponse({ error: err.message }, 400);
        } else {
            return sendResponse({ error: "Something went wrong" }, 500);
        }
    }
}
