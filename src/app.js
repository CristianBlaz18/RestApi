import express from "express";
import morgan from "morgan";
import cors from "cors";




//APP MOVIL

import listarSedesRoutes from "./routes/listarSedes.routes";
import ciclosRoutes from "./routes/ciclos.routes";    
import listarCarrerasRoutes from "./routes/listarCarreras.routes";
import listarContenidoExperienciaRoutes from "./routes/listarContenidoExperiencia.routes";

//WEB CLIENTE
import listarCarrerasSedesRoutes from "./routes/listarCarrerasSedes.routes";
import barraCarreraRoutes from "./routes/barraCarrera.routes";
import carreraUsuarioRoutes from "./routes/carreraUsuario.routes";
import planEstudioRoutes from "./routes/planEstudio.routes";
import experienciaCarreraCiclosRoutes from "./routes/experienciaCarreraCiclo.routes";
import numCiclosCarrreraRoutes from "./routes/numCiclosCarrera.routes";
import botonExperienciaCarreraSedeRoutes from "./routes/botonExperienciaCarrera.routes";
import llamarExperienciaCarreraRoutes from "./routes/llamarExperienciaCarrera.routes";

import llamarCarreraWebController from "./routes/llamarCarreraWeb.routes";


//WEB ADMIN
import crearUsuarioRoutes from "./routes/crearUsuario.routes";
import validarUsuariosRoutes from "./routes/validarUsuario.routes";
import listarCategoriaRoutes from "./routes/listarCategoria.routes";
import agregarContenidoRoutes from "./routes/agregarContenido.routes";

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
app.use("/api/listarContenidoExperiencias",listarContenidoExperienciaRoutes);

//WEB CLIENTE
app.use("/api/carreraUsuario",carreraUsuarioRoutes);
app.use("/api/listarCarreraSede",listarCarrerasSedesRoutes);
app.use("/api/barraCarrera",barraCarreraRoutes);
app.use("/api/listarExperiencias",experienciaCarreraCiclosRoutes);
app.use("/api/listarNumCiclosCarrera",numCiclosCarrreraRoutes);
app.use("/api/botonExperienciaCarrera",botonExperienciaCarreraSedeRoutes);
app.use("/api/llamarExperienciaCarrera",llamarExperienciaCarreraRoutes);
app.use("/api/llamarCarreraWeb",llamarCarreraWebController); 

//EXPERIENCIA FALTA DEFINIR 
app.use("/api/planEstduio",planEstudioRoutes);

//WEB ADMIN
app.use("/api/validarUsuario",validarUsuariosRoutes);
app.use("/api/crearUsuario",crearUsuarioRoutes);
app.use("/api/listarCategoria",listarCategoriaRoutes);
app.use("/api/agregarContenido",agregarContenidoRoutes);




export default app;