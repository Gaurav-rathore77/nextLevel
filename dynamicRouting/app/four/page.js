import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home</h1>
      <p>Explore the docs:</p>
      <ul>
        <li><Link href="four/docs">Docs Root</Link></li>
        <li><Link href="four/docs/nextjs">Next.js Docs</Link></li>
        <li><Link href="four/docs/nextjs/routing">Next.js Routing Docs</Link></li>
        <li><Link href="four/docs/react/hooks">React Hooks Docs</Link></li>
      </ul>
    </div>
  );
}
