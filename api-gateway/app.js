import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";


const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Gateway Running");
});

// Proxy setup for master data service
app.use("/api/master", createProxyMiddleware({
  target: "http://localhost:5001",
  changeOrigin: true,
  secure: false,
  logLevel: "debug",
  pathRewrite: { "^/": "/api/master/" }
}));

app.use("/api/invoice", createProxyMiddleware({
  target: "http://localhost:5002",
  changeOrigin: true,
  secure: false,
  logLevel: "debug",
  pathRewrite: { "^/": "/api/invoice/" }
}));

export default app;