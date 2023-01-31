import { Router } from "express";
import { methods as tipoVariable } from "../controllers/tipoVariable.controller";

const router = Router();

router.get("/", tipoVariable.getTipoVariables);
router.get("/:id", tipoVariable.getTipoVariable);
router.post("/", tipoVariable.addTipoVariable);
router.delete("/:id", tipoVariable.deleteTipoVariable);
router.put("/:id", tipoVariable.updateTipoVariable);

export default router;