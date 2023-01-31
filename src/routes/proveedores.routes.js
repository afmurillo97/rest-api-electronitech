import { Router } from "express";
import { methods as proveedoresController } from "./../controllers/proveedores.controller";

const router = Router();

router.get("/", proveedoresController.getProveedores);
router.get("/:id", proveedoresController.getProveedor);
router.post("/", proveedoresController.addProveedor);
router.delete("/:id", proveedoresController.deleteProveedor);
router.put("/:id", proveedoresController.updateProveedor);

export default router;