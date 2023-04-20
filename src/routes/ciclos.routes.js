import { Router } from "express";
import { methods as ciclosController } from "./../controllers/ciclos.controller";
const router = Router();

router.get("/", ciclosController.getCiclo);

export default router;