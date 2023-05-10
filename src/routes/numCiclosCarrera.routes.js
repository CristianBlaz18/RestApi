import { Router } from "express";
import { methods as numCiclosCarreraController } from "../controllers/Cliente/numCiclosCarrera.controller";
const router = Router();

router.get("/", numCiclosCarreraController.getnumCiclosCarrera);  

export default router;