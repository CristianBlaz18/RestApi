import express from "express";
import morgan from "morgan";
import cors from "cors";


//APP MOVIL
//WEB CLIENTE
import listarCarrerasSedesRoutes from "./routes/WebCliente/listarCarrerasSedes.routes";
import barraCarreraRoutes from "./routes/WebCliente/barraCarrera.routes";
//WEB ADMIN
import ciclosRoutes from "./routes/Movil/ciclos.routes";
import listarSedesRoutes from "./routes/Movil/listarSedes.routes";
import listarCarrerasRoutes from "./routes/Movil/listarCarreras.routes";
import planEstudioRoutes from "./routes/WebCliente/planEstudio.routes";
import crearUsuarioRoutes from "./routes/WebAdmin/crearUsuario.routes";
import carreraUsuarioRoutes from "./routes/WebCliente/carreraUsuario.routes";
import validarUsuariosRoutes from "./routes/WebAdmin/validarUsuario.routes";

const app = express();

//setings
app.set("port", process.env.PORT);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//route
//APP MOVIL
app.use("/api/listarCiclos",ciclosRoutes);
app.use("/api/listarSedes",listarSedesRoutes); 
app.use("/api/listarCarreras",listarCarrerasRoutes);

//WEB CLIENTE
app.use("/api/carreraUsuario",carreraUsuarioRoutes);
app.use("/api/listarCarreraSede",listarCarrerasSedesRoutes);
app.use("/api/barraCarrera",barraCarreraRoutes);

//EXPERIENCIA FALTA DEFINIR 
app.use("/api/planEstduio",planEstudioRoutes);

//WEB ADMIN
app.use("/api/validarUsuario",validarUsuariosRoutes);
app.use("/api/crearUsuario",crearUsuarioRoutes);

export default app;