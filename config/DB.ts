import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = mongoose.connect(process.env.DB_URL as string); // Assuming DB_URL is a string

export { connection };