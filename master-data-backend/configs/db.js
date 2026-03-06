import mongoose from "mongoose";

const connectDB = async () => {

  const uri = "mongodb://127.0.0.1:27017/masterDataDB";

  await mongoose.connect(uri);

  console.log("MongoDB Connected");

};

export default connectDB;