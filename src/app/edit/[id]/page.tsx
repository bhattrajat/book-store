"use client";
import { editBook, selectBooks } from "@/lib/redux/features/books/booksSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { FormEventHandler } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const books = useAppSelector(selectBooks);
  const book = books[params["id"]];

  const dispatch = useAppDispatch();
  const router = useRouter();

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    if (book) {
      dispatch(editBook({ id: book.id, name, category, price, description }));
    }
    router.push("/");
  };

  if (!book) {
    notFound();
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-1 rounded bg-white p-4"
    >
      <label htmlFor="name">
        Name<sup className="text-red-600">*</sup>:
      </label>
      <input
        required
        autoComplete="false"
        className="rounded"
        id="name"
        name="name"
        defaultValue={book?.name}
        type="text"
      ></input>
      <label htmlFor="category">
        Category<sup className="text-red-600">*</sup>:
      </label>
      <input
        required
        autoComplete="false"
        className="rounded"
        id="category"
        name="category"
        defaultValue={book?.category}
        type="text"
      ></input>
      <label htmlFor="description">Description:</label>
      <textarea
        className="rounded"
        autoComplete="false"
        id="description"
        name="description"
        defaultValue={book?.description}
        rows={6}
      />
      <label htmlFor="description">
        Price<sup className="text-red-600">*</sup>:
      </label>
      <input
        type="number"
        required
        autoComplete="false"
        defaultValue={book?.price}
        className="rounded"
        id="price"
        name="price"
      />
      <div className="mt-4 flex gap-4">
        <button
          type="reset"
          className="rounded bg-red-600 px-4 py-2 text-red-50"
        >
          Reset to default
        </button>
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-blue-50"
        >
          Update Book
        </button>
      </div>
    </form>
  );
}
