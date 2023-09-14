import { promises } from 'fs';
import { autoInjectable } from "tsyringe";
import BookOrm from './BookOrm';

@autoInjectable()
export default class BookRepository {
    books = [
        { id: 1, title: 'The Hobbit', author: '<NAME>' },
        { id: 2, title: 'ASD', author: '<NAME>' }
    ];

    bookOrm: BookOrm;

    constructor(bookOrm: BookOrm) {
        this.bookOrm = bookOrm;
    }

    getBooks() {
        return this.books;
    }

    addBook(data: JSON) {
        this.bookOrm.addNewRecord(JSON.stringify(data));
        console.log(data);
    }
}