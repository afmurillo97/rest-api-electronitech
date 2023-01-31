import { Router } from "express";
import { methods as permisosUsuariosController } from "./../controllers/permisosUsuarios.controller";

const router = Router();

router.get("/", permisosUsuariosController.getPermisosUsuario);
router.get("/:id", permisosUsuariosController.getPermisoUsuario);
router.post("/", permisosUsuariosController.addPermisoUsuario);
router.delete("/:id", permisosUsuariosController.deletePermisoUsuario);
router.put("/:id", permisosUsuariosController.updatePermisoUsuario);

export default router;