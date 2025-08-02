async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store" // like SSR
  });
  return res.json();
}

export default async function SSRPage() {
  const users = await getData();

  return (
    <div>
      <h1>Users List (SSR)</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
