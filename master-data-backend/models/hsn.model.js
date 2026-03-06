import mongoose from "mongoose";

const hsnSchema = new mongoose.Schema({

  serviceType: String,
  hsnCode: String,
  igst: Number,
  cgst: Number,
  sgst: Number

}, { timestamps: true });

export default mongoose.model("HSN", hsnSchema);