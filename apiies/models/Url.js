import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, required: true },
    longUrl: { type: String, required: true },
    clicks: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.models.Url || mongoose.model("Url", UrlSchema);
