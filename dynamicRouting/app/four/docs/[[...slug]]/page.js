export default function DocsPage({ params }) {
  const { slug } = params; // slug will be an array or undefined

  // Example Data (In real case, you can fetch from DB or API)
  const docData = {
    "nextjs": "Next.js is a React framework for production.",
    "nextjs/routing": "Routing in Next.js can be static, dynamic, or catch-all.",
    "react/hooks": "React Hooks let you use state and lifecycle in function components."
  };

  // Build path string (e.g., "nextjs/routing")
  const pathKey = slug ? slug.join("/") : "";

  // Fetch data based on path
  const content = docData[pathKey] || "Welcome to the Docs! Choose a topic.";

  return (
    <div style={{ padding: 20 }}>
      <h1>Docs Page</h1>
      <p><b>Path:</b> {slug ? slug.join(" / ") : "Root Docs Page"}</p>
      <hr />
      <p>{content}</p>
    </div>
  );
}
