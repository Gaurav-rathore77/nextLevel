"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("file", file);

    await fetch("/api/images", {
      method: "POST",
      body: formData
    });

    router.push("/");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        /><br /><br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
