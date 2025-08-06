import { getAllItems, addItem } from "@/lib/data";

export async function GET() {
  const allItems = getAllItems();
  return Response.json(allItems);
}

export async function POST(req) {
  const body = await req.json();
  const newItem = addItem(body);
  return Response.json(newItem, { status: 201 });
}
