import express from "express";
import cors from "cors";

import categoryRoutes from "./routes/category.routes.js";
import projectRoutes from "./routes/project.routes.js";
import connectDb from "./config/db.js";

const app = express();
connectDb();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// API Routes
app.use("/api/category", categoryRoutes);
app.use("/api/project", projectRoutes);

export default app;
