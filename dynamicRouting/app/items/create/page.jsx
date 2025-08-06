'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateItem() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
    router.push('/items');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <button type="submit">Add</button>
    </form>
  );
}
