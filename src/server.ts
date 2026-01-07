import "dotenv/config";

import app from "./app";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;
const PORT = process.env.PORT || 10000;

mongoose
  .connect(MONGO_URL!)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((err) => console.error(err));
