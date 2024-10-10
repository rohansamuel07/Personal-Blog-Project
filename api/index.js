import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB Atlas!');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB Atlas!', err);
        process.exit(1); // Exit process if connection fails
    });

const app = express();
app.use(express.json());
app.use(cookieParser()); // Middleware to parse JSON requests

// Define routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Global error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000!!');
});
