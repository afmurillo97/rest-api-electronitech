import { Router } from "express";
import { methods as articulosController } from "./../controllers/articulos.controller";

const router = Router();

router.get("/", articulosController.getArticulos);
router.get("/:id", articulosController.getArticulo);
router.post("/", articulosController.addArticulo);
router.delete("/:id", articulosController.deleteArticulo);
router.put("/:id", articulosController.updateArticulo);

export default router;