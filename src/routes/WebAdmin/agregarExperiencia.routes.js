import { Router } from "express";
import { methods as agregarExperienciaController} from "../../controllers/WebAdmin/crearExperiencia.controller";
const router = Router();

router.post("/", agregarExperienciaController.crearExperiencia);

export default router;