import { Router } from "express";
import { methods as insertarBarraProgresoController} from "../../controllers/WebAdmin/insertarBarraProgreso.controller";
const router = Router();

router.get("/", insertarBarraProgresoController.insertarBarra);

export default router;