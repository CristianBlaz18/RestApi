import { Router } from "express";
import { methods as numExperienciaCarrSedCicController } from "../controllers/Cliente/numExperienciaCarrSedCic.controller";
const router = Router();

router.get("/", numExperienciaCarrSedCicController.getExpereinciaCarrSede);  

export default router;