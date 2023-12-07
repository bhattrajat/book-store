export type Book = {
  category: string;
  description: string;
  id: string;
  name: string;
  price: number;
};
export type BooksState = Record<string, Book>;
