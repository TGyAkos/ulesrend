import "reflect-metadata";
import express from 'express';
import { container } from "tsyringe";
import BookController from "./book/BookController";
import bodyParser from "body-parser";
import { addSyntheticLeadingComment } from "typescript";


const app = express();
const port = 3000;

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `http://localhost:3001`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE,OPTIONS`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
};

// CORS middleware
app.use(allowCrossDomain);
// TODO understand what it does idk currently
// app.use(express.static(`public`)); WHAT ARE YOU
app.use(bodyParser.json());

const bookController = container.resolve(BookController);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send('This is a docker test');
});

app.use('/books', bookController.routes());

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
