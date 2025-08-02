"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    const res = await fetch("/api/blog");
    setBlogs(await res.json());
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function deleteBlog(id) {
    if (confirm("Delete this blog?")) {
      await fetch(`/api/blog/${id}`, { method: "DELETE" });
      fetchBlogs();
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 Blogging Platform</h1>
      <Link href="/create">+ Add Blog</Link>
      <ul style={{ marginTop: "20px" }}>
        {blogs.map((b) => (
          <li key={b._id}>
            <Link href={`/blog/${b._id}`}>{b.title}</Link>{" "}
            <button onClick={() => deleteBlog(b._id)}>🗑 Delete</button>{" "}
            <Link href={`/edit/${b._id}`}>✏ Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
