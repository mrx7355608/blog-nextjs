"use server";
import slugify from "slugify";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { connectDB } from "./db";
import { BlogModel } from "./models";

export async function getBlogs(title) {
    try {
        await connectDB();
        const regex = new RegExp(title, "i");
        const blogs = await BlogModel.find({ title: { $regex: regex } });
        return JSON.parse(JSON.stringify(blogs));
    } catch (err) {
        console.log(err);
        throw new Error("Unable to fetch blogs");
    }
}

export async function createPublishedBlog(tags, formData) {
    // Create blog object from formdata
    const rawData = Object.fromEntries(formData);
    const blog = createBlogObject(rawData, tags);

    // TODO: validate blog data

    // Save blog in database
    connectDB().then(async () => {
        await BlogModel.create(blog);
    });

    // Redirect to dashboard page
    revalidatePath("/dashboard");
    redirect("/dashboard");
}

export async function deleteBlog(id) {
    connectDB().then(async () => {
        await BlogModel.findByIdAndDelete(id);
    });
    revalidatePath("/dashboard");
}

/**
 * Utility functions
 */
function createBlogObject(rawData, tags) {
    const blog = Object.assign(rawData, { tags });
    if (blog.is_published === "yes") {
        blog.is_published = true;
    } else {
        blog.is_published = false;
    }
    blog.slug = slugify(blog.title, { lower: true });
    return blog;
}
