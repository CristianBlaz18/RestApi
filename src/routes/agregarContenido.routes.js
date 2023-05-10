import { Router } from "express";
import { methods as agregarContenidoController} from "../controllers/WebAdmin/agregarContenido.controller";
const router = Router();

router.post("/", agregarContenidoController.postContenido);

export default router;