import { Router } from "express";
import { methods as sedesControllerCliente} from "../../controllers/Cliente/sede.controller";
const router = Router();
//OBTENER CARRERAS FILTRADAS POR SEDE
router.get("/", sedesControllerCliente.getSedes);

//OBTNER CARREA
router.get("/:id", sedesControllerCliente.getSede);

export default router;