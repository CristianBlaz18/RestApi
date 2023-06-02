import { Router } from "express";
import { methods as contenidoControllerCliente } from "../../controllers/Cliente/contenido.controller";
const router = Router();

router.get("/:id", contenidoControllerCliente.getContenido);
export default router;