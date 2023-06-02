import { Router } from "express";
import { methods as cicloACicloCarreraMovilCOntroller } from "../../controllers/Movil/cicloACicloCarreraMovil.controller";
const router = Router();

router.get("/", cicloACicloCarreraMovilCOntroller.getCicloACiclo);

export default router;