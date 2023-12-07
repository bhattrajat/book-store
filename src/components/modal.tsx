"use client";
import { FormEventHandler } from "react";
import { Dialog } from "@headlessui/react";
import { Book } from "@/lib/types";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addBook, editBook } from "@/lib/redux/features/books/booksSlice";

type ModalProps = {
  book: Book | null;
  closeModal: () => void;
  isOpen: boolean;
};

export default function Modal({ book, isOpen, closeModal }: ModalProps) {
  const dispatch = useAppDispatch();

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    if (book) {
      dispatch(editBook({ id: book.id, name, category, price, description }));
    } else {
      dispatch(
        addBook({
          // Generates random uuid for new books
          id: crypto.randomUUID(),
          name,
          category,
          price,
          description,
        }),
      );
    }
    closeModal();
  };
  return (
    <Dialog className="relative z-50" open={isOpen} onClose={closeModal}>
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded border-2 border-black bg-white p-4 shadow">
          <Dialog.Title className="text-center text-2xl">
            {book ? "Edit Book" : "Add Book"}
          </Dialog.Title>
          <Dialog.Description>
            {`Please fill all the required(marked with star) fields to ${
              book ? "edit" : "add"
            } a new book`}
          </Dialog.Description>

          <form onSubmit={submitHandler} className="flex flex-col gap-1">
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
              rows={4}
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
                Reset
              </button>
              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-blue-50"
              >
                {book ? "Update Book" : "Add Book"}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
