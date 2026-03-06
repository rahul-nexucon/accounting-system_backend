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

const bankSchema = new mongoose.Schema(
{
  bankName: String,
  accountNumber: String,
  ifscCode: String,
  branchName: String
},
{ _id: false }
);

const vendorSchema = new mongoose.Schema(
{

  // Multi-company support
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true
  },

  // Vendor identification
  vendorCode: {
    type: String,
    unique: true
  },

  vendorName: {
    type: String,
    required: true,
    trim: true
  },

  vendorType: {
    type: String,
    enum: ["Supplier", "Service Provider", "Contractor", "Other"],
    default: "Supplier"
  },

  // Contact details
  contactPerson: String,
  phoneNumber: String,
  altPhoneNumber: String,

  email: {
    type: String,
    lowercase: true
  },

  website: String,

  // Address
  registeredAddress: addressSchema,

  billingAddress: addressSchema,

  // Tax Information
  gstNumber: String,
  panNumber: String,
  vatNumber: String,

  placeOfSupply: String,

  gstType: {
    type: String,
    enum: ["Regular", "Composition", "Unregistered", "Consumer", "SEZ", "Overseas"],
    default: "Regular"
  },

  // Bank Details (important for vendor payments)
  bankDetails: bankSchema,

  // Payment configuration
  paymentTerms: {
    type: String,
    enum: ["Immediate", "7 Days", "15 Days", "30 Days", "45 Days", "60 Days"],
    default: "30 Days"
  },

  creditLimit: {
    type: Number,
    default: 0
  },

  // Agreement
  agreementStartDate: Date,
  agreementEndDate: Date,

  // Compliance documents
  complianceDocs: {
    type: [String],
    default: []
  },

  // Status
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  },

  isActive: {
    type: Boolean,
    default: true
  },

  remarks: String

},
{
  timestamps: true
});

export default mongoose.model("Vendor", vendorSchema);