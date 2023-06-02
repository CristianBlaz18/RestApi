import { Router } from "express";
import { methods as barraController } from "../../controllers/Cliente/barra.controller";
const router = Router();

router.get("/:id", barraController.getBarraCarrera);
export default router;