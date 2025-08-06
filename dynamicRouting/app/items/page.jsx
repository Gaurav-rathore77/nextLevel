'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <Link href="/items/create">+ Add New</Link>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <Link href={`/items/${item.id}/edit`}> Edit</Link>
            <Link href={`/items/${item.id}/delete`}> Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
