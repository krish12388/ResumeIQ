import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        return true;
    } catch (error) {
        console.error('MongoDB connection failed:', error.message)
        return false;
    }
}

export default dbConnect;