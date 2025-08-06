'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditItem({ params }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const { id } = params;

  useEffect(() => {
    fetch(`/api/items`)
      .then(res => res.json())
      .then(data => {
        const item = data.find(i => i.id === parseInt(id));
        if (item) setName(item.name);
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`/api/items/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name }),
    });
    router.push("/items");
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Item</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
}
