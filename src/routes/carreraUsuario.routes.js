import { Router } from "express";
import { methods as carreraUsuarioController } from "../controllers/Cliente/carreraUsuario.controller";
const router = Router();

router.get("/:id", carreraUsuarioController.getCarreraUsuario);

export default router;