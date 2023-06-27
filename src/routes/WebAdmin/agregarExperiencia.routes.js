import { Router } from "express";
import { methods as agregarExperienciaController} from "../../controllers/WebAdmin/crearExperiencia.controller";
const router = Router();

router.get("/", agregarExperienciaController.crearExperiencia);

export default router;