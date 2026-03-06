import InvoiceService from "../services/invoice.service.js";

export const createInvoice = async (req, res) => {
  try {
    console.log("📥 [CONTROLLER] createInvoice hit");
    console.log("📦 [CONTROLLER] Request body:", JSON.stringify(req.body, null, 2));

    const invoice = await InvoiceService.createInvoice(req.body);

    console.log("✅ [CONTROLLER] Invoice created successfully:", invoice._id);
    res.status(201).json(invoice);

  } catch (error) {
    console.error("❌ [CONTROLLER] Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getInvoices = async (req, res) => {
  try {
    console.log("📥 [CONTROLLER] getInvoices hit");
    const invoices = await InvoiceService.getInvoices();
    console.log(`✅ [CONTROLLER] Found ${invoices.length} invoices`);
    res.json(invoices);
  } catch (error) {
    console.error("❌ [CONTROLLER] Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};