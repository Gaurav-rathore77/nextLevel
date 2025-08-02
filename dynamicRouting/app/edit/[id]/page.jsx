"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditBlog({ params }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(`/api/blog/${params.id}`);
      const data = await res.json();
      setTitle(data.title);
      setContent(data.content);
    }
    fetchBlog();
  }, [params.id]);

  async function handleUpdate(e) {
    e.preventDefault();
    await fetch(`/api/blog/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content })
    });
    router.push("/");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Blog</h1>
      <form onSubmit={handleUpdate}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        /><br /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
