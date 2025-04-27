import express from "express"
import { AddBook, dltBook, editBook, getBook } from "../Controller/bookController.js"

const bookRouter = express.Router()

bookRouter.post("/books", AddBook);
bookRouter.get("/books", getBook)
bookRouter.put("/books/:id", editBook)
bookRouter.patch("/books/:id", editBook)
bookRouter.delete("/books/:id", dltBook)


export default bookRouter