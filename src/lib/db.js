import mongoose from "mongoose";

let isAlreadyConnected = false;

export async function connectDB() {
    try {
        if (isAlreadyConnected) return;
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to database");
        isAlreadyConnected = mongoose.connections[0].readyState;
    } catch (err) {
        console.log(err);
        throw new Error("Unable to connect to database");
    }
}
