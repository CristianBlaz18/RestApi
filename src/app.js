import express from "express";
import morgan from "morgan";

//routes

// import languageRoutes from "./routes/language.routes";

import ciclosRoutes from "./routes/ciclos.routes";
import listarSedesRoutes from "./routes/listarSedes.routes";
import listarCarrerasRoutes from "./routes/listarCarreras.routes";

const app = express();

//setings
app.set("port", process.env.PORT);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes

// app.use("/api/languages",languageRoutes);

app.use("/npmapi/listarCiclos",ciclosRoutes);
app.use("/api/listarSedes",listarSedesRoutes); 
app.use("/api/listarCarreras",listarCarrerasRoutes);

export default app;