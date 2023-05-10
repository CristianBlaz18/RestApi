import { Router } from "express";
import { methods as experienciaCarreraContenidoController } from "../controllers/Cliente/llamarExperienciaContenido.controller";
const router = Router();

router.get("/", experienciaCarreraContenidoController.getExperienciaCarrera); 

export default router;