import { Router } from "express";
import { methods as llamarTextoExperienciaMovil } from "../../controllers/Movil/llamarTextoExperiencia.controller";
const router = Router();

router.get("/", llamarTextoExperienciaMovil.getTextoExperiencia);  

export default router;