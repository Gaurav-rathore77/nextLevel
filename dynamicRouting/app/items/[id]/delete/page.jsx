'use client';
import { useRouter } from "next/navigation";

export default function DeleteItem({ params }) {
  const router = useRouter();
  const { id } = params;

  const handleDelete = async () => {
    await fetch(`/api/items/${id}`, {
      method: "DELETE",
    });
    router.push("/items");
  };

  return (
    <div>
      <h2>Are you sure you want to delete this item?</h2>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => router.back()}>Cancel</button>
    </div>
  );
}
