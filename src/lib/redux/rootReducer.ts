/* Instruments */
import { bookSlice } from "./features/books/booksSlice";

export const reducer = {
  books: bookSlice.reducer,
};
