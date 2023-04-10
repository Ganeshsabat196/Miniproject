import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// const DB = process.env.DB;
const DB = "mongodb://127.0.0.1:27017/miniproject";
console.log(DB);

const Conn = async () => {
    
    try {
        await mongoose.connect(DB, {useUnifiedTopology: true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to database", error.message);
    }
}

export default Conn;