import { Router } from "express";
import { methods as agregarContenidoController} from "../../controllers/WebAdmin/agregarContenido.controller";
const router = Router();

router.get("/", agregarContenidoController.postContenido);

export default router;