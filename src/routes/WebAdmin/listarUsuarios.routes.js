import { Router } from "express";
import { methods as listarUsuariosController } from "../../controllers/WebAdmin/listarUsuario.controller";
const router = Router();

router.get("/", listarUsuariosController.getUsuarios);  

export default router;