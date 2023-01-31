import { Router } from "express";
import { methods as equiposController } from "./../controllers/equipos.controller";

const router = Router();

router.get("/", equiposController.getEquipos);
router.get("/:id", equiposController.getEquipo);
router.post("/", equiposController.addEquipo);
router.delete("/:id", equiposController.deleteEquipo);
router.put("/:id", equiposController.updateEquipo);

export default router;