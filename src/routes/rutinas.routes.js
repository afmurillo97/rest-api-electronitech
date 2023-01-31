import { Router } from "express";
import { methods as rutinasController } from "./../controllers/rutinas.controller";

const router = Router();

router.get("/", rutinasController.getRutinas);
router.get("/:id", rutinasController.getRutina);
router.post("/", rutinasController.addRutina);
router.delete("/:id", rutinasController.deleteRutina);
router.put("/:id", rutinasController.updateRutina);

export default router;