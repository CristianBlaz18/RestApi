import { Router } from "express";
import { methods as pedidoController } from "./../controllers/pedido.controller";
const router = Router();

router.get("/", pedidoController.getPedido);

export default router;