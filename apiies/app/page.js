"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then(setImages);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📸 Image Gallery</h1>
      <Link href="/upload">+ Upload Image</Link>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "20px" }}>
        {images.map((img) => (
          <Image
            key={img._id}
            src={img.url}
            alt="uploaded"
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
}
