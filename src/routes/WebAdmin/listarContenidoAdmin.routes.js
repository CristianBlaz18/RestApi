import { Router } from "express";
import { methods as listarContenidoAdminController } from "../../controllers/WebAdmin/listarContenidoAdmin.controller";
const router = Router();

router.get("/", listarContenidoAdminController.getContenidoAdmin); 

export default router;