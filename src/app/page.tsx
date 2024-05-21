import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Home page</div>
      <Link href="/dashboard">Ir para Dashboard</Link>
    </main>
  );
}
