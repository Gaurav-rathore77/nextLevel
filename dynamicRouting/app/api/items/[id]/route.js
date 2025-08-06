import { deleteItem, updateItem } from "@/lib/data";

export async function PUT(req, { params }) {
  const body = await req.json();
  updateItem(parseInt(params.id), body);
  return Response.json({ message: "Updated" });
}

export async function DELETE(req, { params }) {
  deleteItem(parseInt(params.id));
  return Response.json({ message: "Deleted" });
}
