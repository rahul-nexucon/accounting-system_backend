import express from "express";
import cors from "cors";

import invoiceRoutes from "./routes/invoice.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("Invoice Service Running");
});

app.use("/api/invoice", invoiceRoutes);

export default app;