import { Router } from "express";
import { methods as listarCarrerasController } from "./../controllers/listarCarreras.controller";
const router = Router();

router.get("/", listarCarrerasController.getCarrera);

export default router;