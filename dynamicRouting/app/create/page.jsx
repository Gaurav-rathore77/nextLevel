"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content })
    });
    router.push("/");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        /><br /><br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
