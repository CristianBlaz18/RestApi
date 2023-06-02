import { Router } from "express";
import { methods as listarCategoriasController } from "../../controllers/WebAdmin/listarCategoria.controller";
const router = Router();

router.get("/", listarCategoriasController.getCategoria); 

export default router;