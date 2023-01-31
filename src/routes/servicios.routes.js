import { Router } from "express";
import { methods as serviciosController } from "./../controllers/servicios.controller";

const router = Router();

router.get("/", serviciosController.getServicios);
router.get("/:id", serviciosController.getServicio);
router.post("/", serviciosController.addServicio);
router.delete("/:id", serviciosController.deleteServicio);
router.put("/:id", serviciosController.updateServicio);

export default router;