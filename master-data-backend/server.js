import app from "./app.js";
import connectDB from "./configs/db.js";

const PORT = 5001;

const start = async () => {

  await connectDB();

  app.listen(PORT, () => {
    console.log(`Master data Server running on http://localhost:${PORT}`);
  });

};

start();