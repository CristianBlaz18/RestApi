import { Router } from "express";
import { methods as valoracionControllerCliente } from "../../controllers/Cliente/valoracion.controller";
const router = Router();

router.post("/", valoracionControllerCliente.postValoracion);
export default router;