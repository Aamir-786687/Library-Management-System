import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  isbn: { type: String, unique: true, minlength: 11}, 
  publishedYear: { type: Number, required: true },
  isAvailable: { type: Boolean, required: true },
  copiesAvailable: { type: Number, required: true }
});

const BookModel = mongoose.model("Book", bookSchema);

export default BookModel;
