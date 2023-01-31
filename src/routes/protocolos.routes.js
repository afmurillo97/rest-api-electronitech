import { Router } from "express";
import { methods as protocolosController } from "./../controllers/protocolos.controller";

const router = Router();

router.get("/", protocolosController.getProtocolos);
router.get("/:id", protocolosController.getProtocolo);
router.post("/", protocolosController.addProtocolo);
router.delete("/:id", protocolosController.deleteProtocolo);
router.put("/:id", protocolosController.updateProtocolo);

export default router;