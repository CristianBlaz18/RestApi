import { Router } from "express";
import { methods as listarCarrerasController } from "../../controllers/Movil/listarCarreras.controller";
const router = Router();

router.get("/:id", listarCarrerasController.getCarrera);

export default router;