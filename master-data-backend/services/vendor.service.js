import Vendor from "../models/vendor.model.js";

class VendorService {

  create(data) {
    return Vendor.create(data);
  }

  findAll() {
    return Vendor.find();
  }

  findById(id) {
    return Vendor.findById(id);
  }

  update(id, data) {
    return Vendor.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id) {
    return Vendor.findByIdAndDelete(id);
  }

}

export default new VendorService();