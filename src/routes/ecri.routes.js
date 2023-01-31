import { Router } from "express";
import { methods as ecriController } from "./../controllers/ecri.controller";

const router = Router();

router.get("/", ecriController.getEcris);
router.get("/:id", ecriController.getEcri);
router.post("/", ecriController.addEcri);
router.delete("/:id", ecriController.deleteEcri);
router.put("/:id", ecriController.updateEcri);

export default router;