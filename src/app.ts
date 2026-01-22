import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use("/users", userRoutes);

app.use(routes);

export default app;
