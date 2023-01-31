import { Router } from "express";
import { methods as registrosController } from "./../controllers/registros.controller";

const router = Router();

router.get("/", registrosController.getRegistros);
router.get("/:id", registrosController.getRegistro);
router.post("/", registrosController.addRegistro);
router.delete("/:id", registrosController.deleteRegistro);
router.put("/:id", registrosController.updateRegistro);

export default router;