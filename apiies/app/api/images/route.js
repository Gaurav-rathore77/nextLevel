import { connectDB } from "../../../lib/mongodb";
import cloudinary from "../../../lib/cloudinary";
import Image from "../../../models/image";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const images = await Image.find().sort({ createdAt: -1 });
  return NextResponse.json(images);
}

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
      console.log("⚠️ No file received");
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    console.log("✅ File received:", file.name);

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "next-images" }, (error, result) => {
          if (error) {
            console.error("❌ Cloudinary Error:", error);
            reject(error);
          } else {
            console.log("✅ Cloudinary Upload Success");
            resolve(result);
          }
        })
        .end(buffer);
    });

    // Save to MongoDB
    await connectDB();
    const image = await Image.create({ url: result.secure_url, public_id: result.public_id });

    return NextResponse.json(image);
  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
