import { Router } from "express";
import { methods as listarCarreraSedeMovilController } from "../../controllers/Movil/listarCarreraSedeMovil.controller";
const router = Router();

router.get("/", listarCarreraSedeMovilController.getCarreraSede);
export default router;