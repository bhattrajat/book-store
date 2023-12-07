"use client";
import { removeBook, selectBooks } from "@/lib/redux/features/books/booksSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";

export default function Books() {
  const books = useAppSelector(selectBooks);

  const dispatch = useAppDispatch();
  return (
    <div className="w-full">
      {Object.values(books).map((book) => (
        <div className="my-4 flex gap-2" key={book.id}>
          <Link className="flex-grow" href={`edit/${book.id}`}>
            <div className="w-full rounded border-2 border-black bg-white p-4">
              <h3 className="text-2xl">{book.name}</h3>
              <p>{book.description}</p>
              <h4>Price: {book.price} $</h4>
              <h5>Category: {book.category}</h5>
            </div>
          </Link>
          <div className="mt-1 flex justify-center self-center">
            <button
              onClick={() => dispatch(removeBook(book.id))}
              className="rounded bg-red-600 px-4 py-2 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
