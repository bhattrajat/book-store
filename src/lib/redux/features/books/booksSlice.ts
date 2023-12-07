import { Book, BooksState } from "@/lib/types";
import type { ReduxState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: BooksState = {
  "1": {
    category: "fiction",
    description:
      "This book is about the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
    id: "1",
    name: "Harry Potter and the Philosopher's Stone",
    price: 100,
  },
  "2": {
    category: "biography",
    description:
      "It is Ashlee Vance's biography of Elon Musk, published in 2015. The book traces Elon Musk's life from his childhood up to the time he spent at Zip2 and PayPal, and then onto SpaceX, Tesla, and SolarCity.",
    id: "2",
    name: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    price: 100,
  },
};

export const bookSlice = createSlice({
  name: "book",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addBook: (state, action: PayloadAction<Book>) => {
      state[action.payload.id] = action.payload;
    },
    removeBook: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    editBook: (state, action: PayloadAction<Book>) => {
      state[action.payload.id] = action.payload;
    },
  },
});

export const { addBook, removeBook, editBook } = bookSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBooks = (state: ReduxState) => state.books;

export default bookSlice.reducer;
