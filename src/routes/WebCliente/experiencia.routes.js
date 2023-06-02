import { Router } from "express";
import { methods as experienciaControllerCliente } from "../../controllers/Cliente/experiencia.controller";
const router = Router();

router.get("/:id", experienciaControllerCliente.getExperienciasCarrera);
export default router;