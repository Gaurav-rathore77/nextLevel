import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        <li><Link href="first/users/1">User 1</Link></li>
        <li><Link href="first/users/2">User 2</Link></li>
        <li><Link href="first/users/3">User 3</Link></li>
      </ul>
    </div>
  );
}
