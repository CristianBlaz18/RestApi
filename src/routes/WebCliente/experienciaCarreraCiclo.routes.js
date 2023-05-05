import { Router } from "express";
import { methods as experienciaCarreraCicloController } from "../../controllers/Cliente/experienciaCarreraSedeCiclo.controller";
const router = Router();

router.get("/", experienciaCarreraCicloController.getExperienciaCarreaCiclo); 

export default router;