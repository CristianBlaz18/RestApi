import { Router } from "express";
import { methods as editarExperienciaController} from "../controllers/WebAdmin/editarExperiencia.controller";
const router = Router();
 
router.put("/", editarExperienciaController.editarExperiencia);

export default router;