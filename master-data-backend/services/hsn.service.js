import HSN from "../models/hsn.model.js";

class HsnService {

  create(data) {
    return HSN.create(data);
  }

  findAll() {
    return HSN.find();
  }

  findById(id) {
    return HSN.findById(id);
  }

  update(id, data) {
    return HSN.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id) {
    return HSN.findByIdAndDelete(id);
  }

}

export default new HsnService();