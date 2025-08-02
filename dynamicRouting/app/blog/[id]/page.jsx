export default async function BlogDetails({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${params.id}`, {
    cache: "no-store"
  });
  const blog = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
