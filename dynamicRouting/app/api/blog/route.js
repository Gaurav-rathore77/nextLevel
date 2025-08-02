import { connectDB } from "../../../lib/mongodb";
import Blog from "../../../models/blog";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return Response.json(blogs);
}

export async function POST(req) {
  const { title, content } = await req.json();
  if (!title || !content) {
    return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });
  }

  await connectDB();
  const blog = await Blog.create({ title, content });
  return Response.json(blog);
}
