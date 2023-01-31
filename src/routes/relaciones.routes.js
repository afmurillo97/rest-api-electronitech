import { Router } from "express";
import { methods as relacionesController } from "./../controllers/relaciones.controller";

const router = Router();

// router.get("/", relacionesController.getRelaciones);
router.get("/:id", relacionesController.getRelacion);
router.post("/", relacionesController.addRelacion);
router.delete("/:id", relacionesController.deleteRelacion);
router.put("/:id", relacionesController.updateRelacion);

export default router;