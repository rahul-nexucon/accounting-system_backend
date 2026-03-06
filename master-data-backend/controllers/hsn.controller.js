import HsnService from "../services/hsn.service.js";

export const createHSN = async (req,res)=>{

  const hsn = await HsnService.create(req.body);

  res.status(201).json(hsn);

};

export const getHSN = async (req,res)=>{

  const data = await HsnService.findAll();

  res.json(data);

};

export const getHSNById = async (req,res)=>{

  const hsn = await HsnService.findById(req.params.id);

  res.json(hsn);

};

export const updateHSN = async (req,res)=>{

  const hsn = await HsnService.update(req.params.id, req.body);

  res.json(hsn);

};

export const deleteHSN = async (req,res)=>{

  await HsnService.delete(req.params.id);

  res.json({message:"HSN deleted"});

};