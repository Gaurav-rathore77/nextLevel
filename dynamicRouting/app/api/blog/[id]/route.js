import { connectDB } from "../../../../lib/mongodb";
import Blog from "../../../../models/blog";

export async function GET(req, { params }) {
  await connectDB();
  const blog = await Blog.findById(params.id);
  return Response.json(blog);
}


export async function PUT(req, { params }) {
  const { title, content } = await req.json();
  await connectDB();
  const updated = await Blog.findByIdAndUpdate(
    params.id,
    { title, content },
    { new: true }
  );
  return Response.json(updated);
}

export async function DELETE(req, { params }) {
  await connectDB();
  await Blog.findByIdAndDelete(params.id);
  return Response.json({ message: "Blog deleted" });
}
