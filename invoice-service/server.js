import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import app from "./app.js";

dotenv.config();

const PORT = 5002;

const start = async () => {

  await connectDB();

  app.listen(PORT, () => {
    console.log(`Invoice Service running on http://localhost:${PORT}`);
  });

};

start();