import express from "express";
import morgan from "morgan";
import cors from "cors";




//APP MOVIL

import listarSedesRoutes from "./routes/Movil/listarSedes.routes";
import ciclosRoutes from "./routes/Movil/ciclos.routes";    
import listarCarrerasRoutes from "./routes/Movil/listarCarreras.routes";

import llamarBotonExperienciaRoutes from "./routes/Movil/llamarBotonExp.routes";
import contenidoExperienciaMovilRoutes from "./routes/Movil/contenidoExperienciaMovil.routes";
import insertarSolicitudInformacionRoutes from "./routes/Movil/InsertarSolicitudInformacion.routes";
import listarCarreraSedeMovilRoutes from "./routes/Movil/listarCarreraSedeMovil.routes";
import cicloACicloCarreraMovilRoutes from "./routes/Movil/cicloACicloCarreraMovil.routes";
import llamartextoExperienciaMovilRoutes from "./routes/Movil/llamarTextoExperiencia.routes";
import llamarContenidoExperienciaV2Routes from "./routes/Movil/llamarContendioExperienciaV2.routes";


//WEB CLIENTE
import barraRoutesCliente from "./routes/WebCliente/barra.routes";
import carreraRoutesCliente from "./routes/WebCliente/carrera.routes";
import contenidoRoutesCliente from "./routes/WebCliente/contenido.routes";
import experienciaRoutesCliente from "./routes/WebCliente/experiencia.routes";
import sedeRoutesCliente from "./routes/WebCliente/sedes.routes";
import solicitudRoutesCliente from "./routes/WebCliente/solicitud.routes";
import valoracionRoutesCliente from "./routes/WebCliente/valoracion.routes";

//WEB ADMIN
import crearUsuarioRoutes from "./routes/WebAdmin/crearUsuario.routes";
import validarUsuariosRoutes from "./routes/WebAdmin/validarUsuario.routes";
import listarCategoriaRoutes from "./routes/WebAdmin/listarCategoria.routes";
import agregarContenidoRoutes from "./routes/WebAdmin/agregarContenido.routes";
import listarCiclosCarrerasRoutes from "./routes/WebAdmin/listarCiclosCarrera.routes";
import agregarExperienciaRoutes from "./routes/WebAdmin/agregarExperiencia.routes";
import editarExperienciaRoutes from "./routes/WebAdmin/editarExperiencia.routes";
import listarExperienciaAdminRoutes from "./routes/WebAdmin/listarExperienciasAdmin.routes";
import listarUsuariosRoutes from "./routes/WebAdmin/listarUsuarios.routes";
import insertarBarraProgresoRoutes from "./routes/WebAdmin/insertarBarraProgreso.routes";
import listarContendidoAdminRoutes from "./routes/WebAdmin/listarContenidoAdmin.routes";

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
app.use("/api/llamarBotonExp",llamarBotonExperienciaRoutes); 
app.use("/api/contenidoExperienciaMovil",contenidoExperienciaMovilRoutes);
app.use("/api/insertarSolicitudInformacion",insertarSolicitudInformacionRoutes); 
app.use("/api/listarCarreraSedeMovil",listarCarreraSedeMovilRoutes); 
app.use("/api/cicloACicloMovil",cicloACicloCarreraMovilRoutes); 
app.use("/api/textoExperiencia",llamartextoExperienciaMovilRoutes); 
app.use("/api/contenidoExperienciav2",llamarContenidoExperienciaV2Routes); 

//WEB CLIENTE
app.use('/api/barra', barraRoutesCliente);
app.use('/api/carrera', carreraRoutesCliente);
app.use('/api/contenido', contenidoRoutesCliente);
app.use('/api/experiencia', experienciaRoutesCliente);
app.use('/api/sede', sedeRoutesCliente);
app.use('/api/solicitud', solicitudRoutesCliente);
app.use('/api/valoracion', valoracionRoutesCliente);


//WEB ADMIN
app.use("/api/validarUsuario",validarUsuariosRoutes);
app.use("/api/crearUsuario",crearUsuarioRoutes);
app.use("/api/listarCategoria",listarCategoriaRoutes);
app.use("/api/agregarContenido",agregarContenidoRoutes);
app.use("/api/listarCiclosCarreras",listarCiclosCarrerasRoutes);
app.use("/api/agregarExperiencia",agregarExperienciaRoutes); 
app.use("/api/editarExperiencia",editarExperienciaRoutes); 
app.use("/api/listarExperienciaAdmin",listarExperienciaAdminRoutes); 
app.use("/api/listarUsuarios",listarUsuariosRoutes); 
app.use("/api/insertarBarraProgreso",insertarBarraProgresoRoutes);
app.use("/api/listarContenidoAdmin",listarContendidoAdminRoutes);

export default app;