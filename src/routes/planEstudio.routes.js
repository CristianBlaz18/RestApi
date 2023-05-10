import { Router } from "express";
import { methods as planEstudio } from "../controllers/Cliente/planEstudio.controller";
const router = Router();

router.get("/", planEstudio.getPlan);

export default router;