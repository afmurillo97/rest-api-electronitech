import { Router } from "express";
import { methods as tipoEquipo } from "./../controllers/tipoEquipo.controller";

const router = Router();

router.get("/", tipoEquipo.getTipoEquipos);
router.get("/:id", tipoEquipo.getTipoEquipo);
router.post("/", tipoEquipo.addTipoEquipo);
router.delete("/:id", tipoEquipo.deleteTipoEquipo);
router.put("/:id", tipoEquipo.updateTipoEquipo);

export default router;