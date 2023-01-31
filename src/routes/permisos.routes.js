import { Router } from "express";
import { methods as permisosController } from "./../controllers/permisos.controller";

const router = Router();

router.get("/", permisosController.getPermisos);
router.get("/:id", permisosController.getPermiso);
router.post("/", permisosController.addPermiso);
router.delete("/:id", permisosController.deletePermiso);
router.put("/:id", permisosController.updatePermiso);

export default router;