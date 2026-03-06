import Client from "../models/client.model.js";

class ClientService {

  create(data) {
    return Client.create(data);
  }

  findAll() {
    return Client.find();
  }

  findById(id) {
    return Client.findById(id);
  }

  update(id, data) {
    return Client.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id) {
    return Client.findByIdAndDelete(id);
  }

}

export default new ClientService();