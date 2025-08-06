// lib/data.js (in-memory array for demo)
export let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
];

export function getAllItems() {
  return items;
}

export function addItem(item) {
  const newItem = { id: Date.now(), ...item };
  items.push(newItem);
  return newItem;
}

export function updateItem(id, updatedItem) {
  items = items.map((item) => (item.id === id ? { ...item, ...updatedItem } : item));
}

export function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
}
export function updatfunc(id,updatedItem){
    const item = items.map((item) => item.id !== id ? { ...item, ...updatedItem } : item);
}