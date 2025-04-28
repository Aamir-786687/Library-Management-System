import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import bookRouter from './Routes/bookRouter.js';
import connectdb from './Server/db.js';
// Load environment variables
dotenv.config();

connectdb();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/books', bookRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

