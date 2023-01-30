import express from "express";
import morgan from "morgan";
// Routes
import manifiestosRoutes from "./routes/manifiestos.routes"

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/manifiestos", manifiestosRoutes);

export default app;