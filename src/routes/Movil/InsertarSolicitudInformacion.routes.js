import { Router } from "express";
import { methods as insertarSolicitudInformacionController} from "../../controllers/Movil/insertarSolicitudInformacion.controller";
const router = Router();

router.get("/", insertarSolicitudInformacionController.insertarSolicitud); 

export default router;