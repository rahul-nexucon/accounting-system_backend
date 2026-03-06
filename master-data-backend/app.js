import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";
import errorHandler from "./errors/errorHandler.js";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Master Data API Running");
});

app.use("/api/master", routes);

app.use(errorHandler);

export default app;