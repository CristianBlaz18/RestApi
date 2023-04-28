import { Router } from "express";
import { methods as listarCarrerasController } from "../../controllers/Movil/listarCarreras.controller";
const router = Router();

router.get("/", listarCarrerasController.getCarrera);

export default router;