import { Router } from "express";
import Bookservice from "./BookService";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class BookController {
    bookService: Bookservice;
    router: Router;

    constructor(bookservice: Bookservice) {
        this.bookService = bookservice;
        this.router = Router();
    }

    getBooksRoute() {
        return this.bookService.getBooks();
    }

    setBooksRouteAdd(data: JSON) {
        this.bookService.addBook(data)
    }

    routes() {
        this.router.get("/", (_req, res) => res.send(this.getBooksRoute()));
        this.router.post("/add", (req, res) => {
            this.setBooksRouteAdd(req.body);
            console.log(req.body);

            res.status(200).send("WORKED!!!!");
        });
        return this.router;
    }
}