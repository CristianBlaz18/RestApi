import { Router } from "express";
import { methods as listarCiclosCarrerasController } from "../controllers/WebAdmin/listarCiclosCarrera.controller";
const router = Router();

router.get("/", listarCiclosCarrerasController.getCiclosCarrera); 

export default router;