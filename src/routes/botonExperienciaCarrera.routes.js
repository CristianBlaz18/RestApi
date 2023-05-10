import { Router } from "express";
import { methods as botonExperienciaCarreraSedeController } from "../controllers/Cliente/botonExperienciaCarreraSede.controller";
const router = Router();

router.get("/", botonExperienciaCarreraSedeController.getBotonExperiencia); 

export default router;