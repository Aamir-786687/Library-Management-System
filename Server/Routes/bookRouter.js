import express from "express"
import { AddBook, dltBook, editBook, getBook } from "../Controller/bookController.js"

const bookRouter = express.Router()

// CRUD operations
bookRouter.get("/books", getBook);
bookRouter.post("/books", AddBook);
bookRouter.put("/books/:id", editBook);
bookRouter.delete("/books/:id", dltBook);

export default bookRouter;