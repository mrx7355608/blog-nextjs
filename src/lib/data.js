import { connectDB } from "./db";
import { BlogModel } from "./models";

export async function getBlogs() {
    try {
        await connectDB();
        const blogs = await BlogModel.find({});
        return JSON.parse(JSON.stringify(blogs));
    } catch (err) {
        console.log(err);
        throw new Error("Unable to fetch blogs");
    }
}
