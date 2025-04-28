import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  author: { 
    type: String, 
    required: true 
  },
  isbn: { 
    type: String, 
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        // Remove hyphens and check length
        return v.replace(/-/g, '').length === 10 || v.replace(/-/g, '').length === 13;
      },
      message: props => `${props.value} is not a valid ISBN number!`
    }
  },
  isAvailable: { 
    type: Boolean, 
    default: true 
  },
  borrowedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    default: null 
  },
  borrowedAt: { 
    type: Date,
    default: null 
  },
  returnedAt: { 
    type: Date,
    default: null 
  }
}, {
  timestamps: true
});

const BookModel = mongoose.model("Book", bookSchema);

export default BookModel;
