import { connectDB } from "../../../lib/mongodb";
import Url from "../../../models/Url";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function POST(req) {
  try {
    const { longUrl } = await req.json();

    if (!longUrl) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    await connectDB();

    // Generate unique slug
    const slug = nanoid(6);
    const newUrl = await Url.create({ slug, longUrl });

    return NextResponse.json(newUrl);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  const urls = await Url.find().sort({ createdAt: -1 });
  return NextResponse.json(urls);
}
