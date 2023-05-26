import { Router } from "express";
import { methods as listarExperienciasAdminController } from "../controllers/WebAdmin/listarExperienciasAdmin.controller";
const router = Router();

router.get("/", listarExperienciasAdminController.getExperienciasAdmin); 

export default router;