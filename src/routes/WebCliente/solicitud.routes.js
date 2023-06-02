import { Router } from "express";
import { methods as solicitudControllerCLiente } from "../../controllers/Cliente/solicitud.controller";
const router = Router();

router.post("/", solicitudControllerCLiente.postSolicitud);
export default router;