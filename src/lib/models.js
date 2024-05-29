import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        published_on: { type: String, required: true },
        is_published: { type: Boolean, required: true },
        tags: { type: [String], default: [] },
        slug: { type: String, required: true },
        summary: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.models?.User || mongoose.model("User", userSchema);
const BlogModel = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);
export { UserModel, BlogModel };
