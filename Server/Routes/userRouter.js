import express from "express"
import { borrowBook, createUser, editUser, getUsers, returnBook } from "../Controller/userController.js";


const userRouter = express.Router()

userRouter.post("/users", createUser);
userRouter.post("/users/:id/borrow", borrowBook);
userRouter.post("/users/:id/return", returnBook);
userRouter.patch("/users/:id",editUser)
userRouter.put("/users/:id",editUser)
userRouter.get("/users", getUsers);

export default userRouter