export default function ProductDetails({ params }) {
  const { category, id } = params;

  // Example: fetch product details from API
  // You can make this async and call a real API
  const productData = {
    laptop: { 101: "Macbook Pro 16 inch" },
    mobile: { 202: "iPhone 15 Pro Max" },
    headphones: { 303: "Sony WH-1000XM5" }
  };

  const productName = productData[category]?.[id] || "Unknown Product";

  return (
    <div style={{ padding: 20 }}>
      <h1>Product Details</h1>
      <p><b>Category:</b> {category}</p>
      <p><b>Product ID:</b> {id}</p>
      <p><b>Name:</b> {productName}</p>
    </div>
  );
}
