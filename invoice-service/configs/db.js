import mongoose from "mongoose";

const connectDB = async () => {

  const uri = "mongodb://127.0.0.1:27017/invoiceDB";

  await mongoose.connect(uri);

  console.log("Invoice DB Connected");

};

export default connectDB;