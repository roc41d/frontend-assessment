import { Book } from "./book";

export interface BooksResponse {
    data: Book[];
    links: {
      first: string;
      last: string;
    };
}