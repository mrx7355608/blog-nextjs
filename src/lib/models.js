import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String },
        is_published: { type: Boolean },
        tags: { type: [String], default: [] },
        slug: { type: String, required: true },
        summary: { type: String },
    },
    {
        timestamps: true,
    },
);

const userSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

const UserModel = mongoose.models?.User || mongoose.model("User", userSchema);
const BlogModel = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);
export { UserModel, BlogModel };
