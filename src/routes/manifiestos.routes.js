import { Router } from "express";
import { methods as manifiestosController } from "./../controllers/manifiestos.controller";

const router = Router();

router.get("/", manifiestosController.getManifiestos);
router.get("/:id", manifiestosController.getManifiesto);
router.post("/", manifiestosController.addManifiesto);
router.delete("/:id", manifiestosController.deleteManifiesto);
router.put("/:id", manifiestosController.updateManifiesto);

export default router;