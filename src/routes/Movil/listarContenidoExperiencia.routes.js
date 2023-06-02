import { Router } from "express";
import { methods as listarContenidoExperienciaController } from "../../controllers/Movil/listarContenidoExperiencia.controller";
const router = Router();

router.get("/", listarContenidoExperienciaController.getContenidoExp); 

export default router;