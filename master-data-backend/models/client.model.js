import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
{
  line1: String,
  line2: String,
  city: String,
  state: String,
  country: {
    type: String,
    default: "India"
  },
  pinCode: String
},
{ _id: false }
);

const clientSchema = new mongoose.Schema(
{
    // Multi-company support
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },

  // Client Identification
  clientCode: {
    type: String,
    unique: true
  },

  clientName: {
    type: String,
    required: true,
    trim: true
  },

  clientType: {
    type: String,
    enum: ["Company","Individual","Government","Export"],
    default: "Company"
  },

  // Contact Information
  contactPerson: String,
  contactNumber: String,
  altContactNumber: String,

  email: {
    type: String,
    lowercase: true
  },

  website: String,

  // Address
  billingAddress: addressSchema,
  shippingAddress: addressSchema,

  sameAsBilling: {
    type: Boolean,
    default: true
  },

  // Tax Information
  gstNumber: String,
  panNumber: String,
  vatNumber: String,

  placeOfSupply: String,

  gstType: {
    type: String,
    enum: ["Regular","Composition","Unregistered","Consumer","SEZ","Overseas"],
    default: "Regular"
  },

  // Payment Details
  paymentTerms: {
    type: String,
    enum: ["Immediate","7 Days","15 Days","30 Days","45 Days","60 Days"],
    default: "30 Days"
  },

  currency: {
    type: String,
    default: "INR"
  },

  creditLimit: {
    type: Number,
    default: 0
  },

  // Accounting
  openingBalance: {
    type: Number,
    default: 0
  },

  openingBalanceDate: Date,

  // Status
  isActive: {
    type: Boolean,
    default: true
  },

  // Additional Info
  remarks: String

},
{
  timestamps: true
}
);

export default mongoose.model("Client", clientSchema);