import { Router } from "express";
import { methods as carreraSedeController } from "../controllers/Cliente/listarCarrerasSedes.controller";
const router = Router();

router.get("/", carreraSedeController.getCarreraSede); 

export default router;