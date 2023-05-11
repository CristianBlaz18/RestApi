import { Router } from "express";
import { methods as llamarCarreraWebController } from "../controllers/Cliente/llamarCarreraWebAdmin.controller";
const router = Router();

router.get("/", llamarCarreraWebController.getCarreraWeb);  

export default router;