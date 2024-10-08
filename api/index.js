import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO
).then(() => {
    console.log('Connected to MongoDB Atlas!');
}).catch(err => {
    console.error('Error connecting to MongoDB Atlas!', err);
});
const app = express();
app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
})
