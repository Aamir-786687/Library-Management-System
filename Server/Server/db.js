import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectdb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error)
    }
}

export default connectdb