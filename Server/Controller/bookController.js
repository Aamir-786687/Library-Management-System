import BookModel from "../Model/bookSchema.js"

const AddBook = async (req, res) => {
    try {
        const { title, author, isbn } = req.body;
        
        // Validate required fields
        if (!title || !author || !isbn) {
            return res.status(400).json({ 
                error: "Missing required fields" 
            });
        }

        // Create new book
        const book = new BookModel({
            title,
            author,
            isbn,
            isAvailable: true
        });

        // Save the book
        const savedBook = await book.save();
        
        res.status(201).json(savedBook);
    } catch (error) {
        // Handle duplicate ISBN error
        if (error.code === 11000) {
            return res.status(400).json({ 
                error: "A book with this ISBN already exists" 
            });
        }
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                error: error.message 
            });
        }

        // Handle other errors
        res.status(500).json({ 
            error: "Failed to add book" 
        });
    }
}

const getBook = async (req, res) => {
    try {
        const books = await BookModel.find()
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ 
            error: "Failed to fetch books" 
        });
    }
}

const editBook = async (req, res) => {
    try {
        const { title, author, isbn } = req.body;
        
        const updatedBook = await BookModel.findByIdAndUpdate(
            req.params.id,
            { title, author, isbn },
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ 
                error: "Book not found" 
            });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                error: error.message 
            });
        }
        res.status(500).json({ 
            error: "Failed to update book" 
        });
    }
}

const dltBook = async (req, res) => {
    try {
        const deletedBook = await BookModel.findByIdAndDelete(req.params.id);
        
        if (!deletedBook) {
            return res.status(404).json({ 
                error: "Book not found" 
            });
        }

        res.status(200).json({ 
            message: "Book deleted successfully" 
        });
    } catch (error) {
        res.status(500).json({ 
            error: "Failed to delete book" 
        });
    }
}

// Add borrow and return functionality
const borrowBook = async (req, res) => {
    try {
        const { userId } = req.body;
        const book = await BookModel.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ 
                error: "Book not found" 
            });
        }

        if (!book.isAvailable) {
            return res.status(400).json({ 
                error: "Book is not available" 
            });
        }

        book.isAvailable = false;
        book.borrowedBy = userId;
        book.borrowedAt = new Date();
        book.returnedAt = null;

        const updatedBook = await book.save();
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ 
            error: "Failed to borrow book" 
        });
    }
}

const returnBook = async (req, res) => {
    try {
        const book = await BookModel.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ 
                error: "Book not found" 
            });
        }

        if (book.isAvailable) {
            return res.status(400).json({ 
                error: "Book is already returned" 
            });
        }

        book.isAvailable = true;
        book.borrowedBy = null;
        book.returnedAt = new Date();

        const updatedBook = await book.save();
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ 
            error: "Failed to return book" 
        });
    }
}

export { AddBook, dltBook, getBook, editBook, borrowBook, returnBook };