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
