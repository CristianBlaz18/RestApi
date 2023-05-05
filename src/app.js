import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUI from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
const path = require("path")
// const swaggerUI= require("swagger-ui-express");
// const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "APIs Equipo Verde",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8080"
            }    
        ]
    },
    apis:[`${path.join(__dirname, "./routes/Movil/*.js")}`]
}



//APP MOVIL
import listarSedesRoutes from "./routes/Movil/listarSedes.routes";
import ciclosRoutes from "./routes/Movil/ciclos.routes";    
import listarCarrerasRoutes from "./routes/Movil/listarCarreras.routes";

//WEB CLIENTE
import listarCarrerasSedesRoutes from "./routes/WebCliente/listarCarrerasSedes.routes";
import barraCarreraRoutes from "./routes/WebCliente/barraCarrera.routes";
import carreraUsuarioRoutes from "./routes/WebCliente/carreraUsuario.routes";
import planEstudioRoutes from "./routes/WebCliente/planEstudio.routes";
import experienciaCarreraCiclosRoutes from "./routes/WebCliente/experienciaCarreraCiclo.routes";

//WEB ADMIN
import crearUsuarioRoutes from "./routes/WebAdmin/crearUsuario.routes";
import validarUsuariosRoutes from "./routes/WebAdmin/validarUsuario.routes";
import listarCategoriaRoutes from "./routes/WebAdmin/listarCategoria.routes";

const app = express();

//setings
app.set("port", process.env.PORT);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/api-doc",
    swaggerUI.serve,
    swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

//route
//APP MOVIL
app.use("/api/listarCiclos",ciclosRoutes);
app.use("/api/listarSedes",listarSedesRoutes); 


app.use("/api/listarCarreras",listarCarrerasRoutes);

//WEB CLIENTE
app.use("/api/carreraUsuario",carreraUsuarioRoutes);
app.use("/api/listarCarreraSede",listarCarrerasSedesRoutes);
app.use("/api/barraCarrera",barraCarreraRoutes);
app.use("/api/listarExperiencias",experienciaCarreraCiclosRoutes);

//EXPERIENCIA FALTA DEFINIR 
app.use("/api/planEstduio",planEstudioRoutes);

//WEB ADMIN
app.use("/api/validarUsuario",validarUsuariosRoutes);
app.use("/api/crearUsuario",crearUsuarioRoutes);
app.use("/api/listarCategoria",listarCategoriaRoutes);




export default app;