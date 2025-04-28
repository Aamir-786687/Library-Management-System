import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userFullName: {
    type: String,
    required: false,
  },
  mobileNumber: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  points: {
    type: Number,
    default: 0,
  },
  rank: {
    type: Number,
    default: 0,
  },
  activeTransactions: [{
    bookName: String,
    transactionType: String,
    fromDate: Date,
    toDate: Date,
    transactionDate: Date,
  }],
}, { timestamps: true });

export default mongoose.model('User', userSchema); 