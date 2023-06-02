import { Router } from "express";
import { methods as llamarBotonExperienciaController } from "../../controllers/Movil/llamarBotonExp.controller";
const router = Router();

router.get("/", llamarBotonExperienciaController.getBotonExp);  

export default router;