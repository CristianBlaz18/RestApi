import { Router } from "express";
import { methods as llamarContenidoExperienciaV2Controller } from "../../controllers/Movil/llamarContendioExperienciaV2.controller";
const router = Router();

router.get("/", llamarContenidoExperienciaV2Controller.getContenidoExperienciaV2);  

export default router;