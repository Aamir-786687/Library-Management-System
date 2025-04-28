import User from '../Model/User.js';

// Create new user
export const createUser = async (req, res) => {
    try {
        const { username, email, ...otherDetails } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        });

        if (existingUser) {
            return res.status(400).json({ 
                message: "Username or email already exists" 
            });
        }

        // Create new user
        const newUser = new User({
            username,
            email,
            ...otherDetails
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ 
            message: "Error creating user", 
            error: err.message 
        });
    }
};

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ 
            message: "Error updating user", 
            error: err.message 
        });
    }
};

// Login user
export const loginUser = async (req, res) => {
    try {
        const { username, email } = req.body;

        // Check if user exists with either username or email
        const user = await User.findOne({ 
            $or: [
                { username: username },
                { email: email }
            ]
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Send user data without sensitive information
        const { ...userData } = user._doc;
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ message: "Error during login", error: err.message });
    }
};

// Get user by ID
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const { ...userData } = user._doc;
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ message: "Error fetching user", error: err.message });
    }
};

// Update user
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ 
            message: "Error updating user", 
            error: err.message 
        });
    }
};

export { editUser };
