import express from "express";
import morgan from "morgan";

//routes

// import languageRoutes from "./routes/language.routes";
import pedidoRoutes from "./routes/pedido.routes";

const app = express();

//setings
app.set("port", process.env.PORT);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes

// app.use("/api/languages",languageRoutes);
app.use("/api/pedido",pedidoRoutes);

export default app;