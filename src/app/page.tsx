import Books from "@/components/books";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <div className="flex justify-center">
        <Link
          href="/add"
          className="rounded bg-green-700 px-4 py-2 text-green-50"
        >
          Add Book
        </Link>
      </div>
      <Books />
    </main>
  );
}
