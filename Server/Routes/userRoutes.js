import express from 'express';
import { loginUser, createUser, getUser, updateUser, getUsers } from '../Controller/userController.js';

const router = express.Router();

// Login route
router.post('/login', loginUser);

// Create new user
router.post('/create', createUser);

// Get all users
router.get('/', getUsers);

// Get user by ID
router.get('/:id', getUser);

// Update user
router.put('/:id', updateUser);

export default router; 