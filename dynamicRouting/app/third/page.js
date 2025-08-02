import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Product Catalog</h1>
      <ul>
        <li>
          <Link href="third/product/laptop/101">Laptop - ID 101</Link>
        </li>
        <li>
          <Link href="third/product/mobile/202">Mobile - ID 202</Link>
        </li>
        <li>
          <Link href="third/product/headphones/303">Headphones - ID 303</Link>
        </li>
      </ul>
    </div>
  );
}
