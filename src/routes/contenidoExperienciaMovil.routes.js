import { Router } from "express";
import { methods as contendioExperienciaController } from "../controllers/Movil/contendioExperiencia.controller";
const router = Router();

router.get("/", contendioExperienciaController.getContenidoExpMovil); 

export default router;