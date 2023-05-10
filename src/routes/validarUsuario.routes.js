import { Router } from "express";
import { methods as validarUsuarioController} from "../controllers/WebAdmin/validarUsuario.controller";
const router = Router();

router.post("/", validarUsuarioController.validarUsuario);

export default router;