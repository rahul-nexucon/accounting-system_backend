import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({

  description: String,

  hsnCode: String,

  quantity: Number,

  rate: Number,

  igst: Number,

  cgst: Number,

  sgst: Number,

  total: Number

});

const invoiceSchema = new mongoose.Schema({

  invoiceNumber: String,

  clientCode: String,

  clientName: String,

  clientEmail: String,

  items: [itemSchema],

  subtotal: Number,

  totalTax: Number,

  totalAmount: Number

},
{ timestamps:true });

export default mongoose.model("Invoice", invoiceSchema);