"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [longUrl, setLongUrl] = useState("");
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch("/api/shortener")
      .then((res) => res.json())
      .then(setUrls);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/shortener", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longUrl }),
    });
    if (res.ok) {
      setLongUrl("");
      const newUrl = await res.json();
      setUrls((prev) => [newUrl, ...prev]);
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔗 URL Shortener</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="url"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
          className="border p-2 flex-1"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Shorten
        </button>
      </form>

      <ul>
        {urls.map((url) => (
          <li key={url._id} className="mb-3">
            <a
              href={`/${url.slug}`}
              target="_blank"
              className="text-blue-700 underline"
            >
              {window.location.origin}/{url.slug}
            </a>
            <p className="text-sm text-gray-500">
              {url.longUrl} | Clicks: {url.clicks}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}





// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Welcome</h1>
//       <Link href="/admin" className="text-blue-600 underline">
//         Go to Admin Dashboard
//       </Link>
//     </div>
//   );
// }




// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function HomePage() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch("/api/images")
//       .then((res) => res.json())
//       .then(setImages);
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>📸 Image Gallery</h1>
//       <Link href="/upload">+ Upload Image</Link>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "20px" }}>
//         {images.map((img) => (
//           <Image
//             key={img._id}
//             src={img.url}
//             alt="uploaded"
//             width={300}
//             height={200}
//             style={{ objectFit: "cover" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
