import { Router } from "express";
import { methods as modelosController } from "./../controllers/modelos.controller";

const router = Router();

router.get("/", modelosController.getModelos);
router.get("/:id", modelosController.getModelo);
router.post("/", modelosController.addModelo);
router.delete("/:id", modelosController.deleteModelo);
router.put("/:id", modelosController.updateModelo);

export default router;