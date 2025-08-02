import { redirect } from "next/navigation";
import { connectDB } from "../../lib/mongodb";
import Url from "../../models/Url";

export default async function RedirectPage({ params }) {
  await connectDB();
  const url = await Url.findOne({ slug: params.slug });

  if (!url) {
    return <div className="p-6 text-red-600">⚠️ Invalid short URL</div>;
  }

  // Increment click count
  url.clicks += 1;
  await url.save();

  redirect(url.longUrl);
}
