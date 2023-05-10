import { Router } from "express";
import { methods as crearUsuarioController} from "../controllers/WebAdmin/crearUsuario.controller";
const router = Router();
 
router.post("/", crearUsuarioController.crearUsuario);

export default router;