import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,   // ✅ exact value
  api_key: process.env.CLOUDINARY_API_KEY,         // ✅ exact value
  api_secret: process.env.CLOUDINARY_API_SECRET    // ✅ exact value
});

cloudinary.api.ping()
  .then(console.log)
  .catch(console.error);
  
export default cloudinary;

