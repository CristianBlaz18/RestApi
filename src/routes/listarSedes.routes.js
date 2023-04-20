import { Router } from "express";
import { methods as listarSedesController } from "./../controllers/listarSedes.controller";
const router = Router();

router.get("/", listarSedesController.getSedes);

export default router;