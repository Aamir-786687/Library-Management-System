import UserModel from "../Model/userSchema.js";
import BookModel from "../Model/bookSchema.js";

const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const borrowBook = async (req, res) => {
    const { id } = req.params;
    const { bookId } = req.body;
    try {
        const user = await UserModel.findById(id);
        const book = await BookModel.findById(bookId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        if (!book.isAvailable) {
            return res.status(400).json({ error: "Book is currently unavailable" });
        }
        console.log("User borrowedBooks before push:", user.borrowedBooks);

        if (!user.borrowedBooks) {
            user.borrowedBooks = [];
        }

        user.borrowedBooks.push(bookId);
        book.isAvailable = false;

        await user.save();
        await book.save();

        res.status(200).json({ message: "Book borrowed successfully", user, book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const returnBook = async (req, res) => {
    const { id } = req.params;
    const { bookId } = req.body;

    try {
        const user = await UserModel.findById(id);
        const book = await BookModel.findById(bookId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        if (!user.borrowedBooks.includes(bookId)) {
            return res.status(400).json({ error: "User did not borrow this book" });
        }

        user.borrowedBooks = user.borrowedBooks.filter(borrowedBookId => borrowedBookId !== bookId);
        book.isAvailable = true;

        await user.save();
        await book.save();

        res.status(200).json({ message: "Book returned successfully", user, book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editUser = async (req, res) => {
    try {
        const data = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export { createUser, getUsers, borrowBook, returnBook, editUser };
