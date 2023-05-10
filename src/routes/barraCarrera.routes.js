import { Router } from "express";
import { methods as barraCarreraController } from "../controllers/Cliente/barraCarrera.controller";
const router = Router();

router.get("/", barraCarreraController.getBarraCarrera); 

export default router;