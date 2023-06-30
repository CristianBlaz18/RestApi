import { Router } from "express";
import { methods as editarBarraProgresoController} from "../../controllers/WebAdmin/editarBarraProgreso.controller";
const router = Router();
 
router.put("/", editarBarraProgresoController.editarBarraProgreso);

export default router;