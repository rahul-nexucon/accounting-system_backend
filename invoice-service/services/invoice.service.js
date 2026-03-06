import axios from "axios";
import Invoice from "../models/invoice.model.js";
import { calculateTax } from "../utils/taxCalculator.js";

const MASTER_SERVICE = "http://localhost:5000/api/master";

class InvoiceService {

  async createInvoice(data) {

    console.log("🚀 [SERVICE] createInvoice started");
    console.log("🔍 [SERVICE] clientCode:", data.clientCode);

    // Step 1 - Fetch client
    console.log(`📡 [SERVICE] Calling master for client: ${MASTER_SERVICE}/clients/${data.clientid}`);
    const clientRes = await axios.get(`${MASTER_SERVICE}/clients/${data.clientid}`);
    console.log("✅ [SERVICE] Client fetched:", JSON.stringify(clientRes.data, null, 2));
    const client = clientRes.data;

    const items = [];

    // Step 2 - Fetch HSN for each item
    for (const item of data.items) {
      console.log(`📡 [SERVICE] Calling master for HSN: ${MASTER_SERVICE}/hsn/${item.hsnid}`);
      
      const hsnRes = await axios.get(`${MASTER_SERVICE}/hsn/${item.hsnid}`);
      console.log("✅ [SERVICE] HSN fetched:", JSON.stringify(hsnRes.data, null, 2));
      
      const hsn = hsnRes.data;

      items.push({
        ...item,
        igst: hsn.igst,
        cgst: hsn.cgst,
        sgst: hsn.sgst
      });

      console.log(`📦 [SERVICE] Item built:`, items[items.length - 1]);
    }

    // Step 3 - Calculate tax
    console.log("🧮 [SERVICE] Calculating tax...");
    const totals = calculateTax(items);
    console.log("✅ [SERVICE] Tax calculated:", totals);

    // Step 4 - Save to DB
    console.log("💾 [SERVICE] Saving invoice to DB...");
    const invoice = await Invoice.create({
      invoiceNumber: `INV-${Date.now()}`,
      clientCode: data.clientCode,
      clientName: client.clientName,
      clientEmail: client.email,
      items,
      ...totals
    });

    console.log("✅ [SERVICE] Invoice saved! ID:", invoice._id);
    return invoice;
  }

  async getInvoices() {
    console.log("📥 [SERVICE] getInvoices called");
    return Invoice.find();
  }
}

export default new InvoiceService();