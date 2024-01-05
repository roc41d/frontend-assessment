import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { BooksResponse } from "./interfaces/book-response";

@Injectable()

export class BookService {
    private pathToJson = '/assets/books.json';
    private http = inject(HttpClient);

    getBooks(): Observable<BooksResponse> {
        return this.http.get<BooksResponse>(this.pathToJson);
    }
}