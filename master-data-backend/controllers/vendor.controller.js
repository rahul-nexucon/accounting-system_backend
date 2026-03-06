import VendorService from "../services/vendor.service.js";

export const createVendor = async (req,res)=>{

  const vendor = await VendorService.create(req.body);

  res.status(201).json(vendor);

};

export const getVendors = async (req,res)=>{

  const vendors = await VendorService.findAll();

  res.json(vendors);

};

export const getVendorById = async (req,res)=>{

  const vendor = await VendorService.findById(req.params.id);

  res.json(vendor);

};

export const updateVendor = async (req,res)=>{

  const vendor = await VendorService.update(req.params.id, req.body);

  res.json(vendor);

};

export const deleteVendor = async (req,res)=>{

  await VendorService.delete(req.params.id);

  res.json({message:"Vendor deleted"});

};