import { autoInjectable } from 'tsyringe';
import BookRepository from './BookRepository';

@autoInjectable()
export default class Bookservice {

    bookRepository: BookRepository;

    constructor(bookRepository: BookRepository) {
        this.bookRepository = bookRepository
    }

    getBooks() {
        return this.bookRepository.getBooks()
    }

    addBook(data: JSON) {
        this.bookRepository.addBook(data);
        console.log(data);
    }
}