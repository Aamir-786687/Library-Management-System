import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  borrowedBooks: { 
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
    default: []  // Initialize the borrowedBooks field as an empty array
  }
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
