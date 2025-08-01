// app/page.jsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6 max-w-4xl mx-auto grid gap-6">
      <h1 className="text-3xl font-bold">Welcome to My Credit Repair App</h1>
      <Link href="/apply" className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Apply Now
      </Link>
    </main>
  );
}

