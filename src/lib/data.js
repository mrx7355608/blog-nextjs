"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "./db";
import { BlogModel } from "./models";

/*
 * ********************
 *    User functions
 * ********************
 */

export async function getBlogs(title) {
    try {
        await connectDB();

        let blogs;

        if (title) {
            const regex = new RegExp(title, "i");
            blogs = await BlogModel.find({
                title: { $regex: regex },
                is_published: true,
            });
        } else {
            blogs = await BlogModel.find({
                is_published: true,
            });
        }
        return JSON.parse(JSON.stringify(blogs));
    } catch (err) {
        throw new Error("Unable to fetch blogs");
    }
}

export async function getOneBlogBySlug(slug) {
    await connectDB();
    const blog = await BlogModel.findOne({ slug, is_published: true });
    return JSON.parse(JSON.stringify(blog));
}

/*
 * ********************
 *   Admin functions
 * ********************
 */
export async function getBlogsForAdmin(title) {
    try {
        await connectDB();

        let blogs;

        if (title) {
            const regex = new RegExp(title, "i");
            blogs = await BlogModel.find({
                title: { $regex: regex },
            });
        } else {
            blogs = await BlogModel.find({});
        }
        return JSON.parse(JSON.stringify(blogs));
    } catch (err) {
        throw new Error("Unable to fetch blogs");
    }
}

export async function getOneBlogBySlugForAdmin(slug) {
    await connectDB();
    const blog = await BlogModel.findOne({ slug });
    return JSON.parse(JSON.stringify(blog));
}

export async function deleteBlog(id) {
    connectDB().then(async () => {
        await BlogModel.findByIdAndDelete(id);
    });
    revalidatePath("/dashboard");
}

export async function unpublish(id) {
    connectDB().then(async () => {
        await BlogModel.findByIdAndUpdate(
            id,
            { is_published: false },
            { new: true },
        );
    });
    revalidatePath("/");
    revalidatePath("/dashboard");
}

export async function publish(id) {
    connectDB().then(async () => {
        await BlogModel.findByIdAndUpdate(
            id,
            { is_published: true },
            { new: true },
        );
    });
    revalidatePath("/");
    revalidatePath("/dashboard");
}

export async function getBlogById(id) {
    await connectDB();
    const blog = await BlogModel.findById(id);
    return JSON.parse(JSON.stringify(blog));
}
