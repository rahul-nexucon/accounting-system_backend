import ClientService from "../services/client.service.js";

export const createClient = async (req,res)=>{

  const client = await ClientService.create(req.body);

  res.status(201).json(client);

};

export const getClients = async (req,res)=>{

  const clients = await ClientService.findAll();

  res.json(clients);

};

export const getClientById = async (req,res)=>{

  const client = await ClientService.findById(req.params.id);

  res.json(client);

};

export const updateClient = async (req,res)=>{

  const client = await ClientService.update(req.params.id, req.body);

  res.json(client);

};

export const deleteClient = async (req,res)=>{

  await ClientService.delete(req.params.id);

  res.json({message:"Client deleted"});

};