import { Router } from "express";
import { methods as fabricantesController } from "./../controllers/fabricantes.controller";

const router = Router();

router.get("/", fabricantesController.getFabricantes);
router.get("/:id", fabricantesController.getFabricante);
router.post("/", fabricantesController.addFabricante);
router.delete("/:id", fabricantesController.deleteFabricante);
router.put("/:id", fabricantesController.updateFabricante);

export default router;