import { Router } from "express";
import { methods as carreraController} from "../../controllers/Cliente/carrera.controller";
const router = Router();
//OBTENER CARRERAS FILTRADAS POR SEDE
router.get("/sede/:id", carreraController.getCarreraSede);

//OBTNER CARREA
router.get("/:id", carreraController.getCarrera);

export default router;