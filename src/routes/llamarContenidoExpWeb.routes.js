import { Router } from "express";
import { methods as contenidoExperienciawebController } from "../controllers/Cliente/llamarContenidoExp.controller";
const router = Router();

router.get("/", contenidoExperienciawebController.getContenidoExpWeb); 

export default router;