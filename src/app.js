import express from "express";
import morgan from "morgan";
// Routes
import manifiestosRoutes from "./routes/manifiestos.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import tipoVariablesRoutes from "./routes/tipoVariables.routes";
import ecriRoutes from "./routes/ecri.routes";
import tipoEquipoRoutes from "./routes/tipoEquipo.routes";
import serviciosRoutes from "./routes/servicios.routes";
import rutinasRoutes from "./routes/rutinas.routes";
import relacionesRoutes from "./routes/relaciones.routes";
import registrosRoutes from "./routes/registros.routes";
import proveedoresRoutes from "./routes/proveedores.routes";
import fabricantesRoutes from "./routes/fabricantes.routes";
import protocolosRoutes from "./routes/protocolos.routes";
import permisosRoutes from "./routes/permisos.routes";
import permisosUsuariosRoutes from "./routes/permisosUsuarios.routes";
import marcasRoutes from "./routes/marcas.routes";
import modelosRoutes from "./routes/modelos.routes";
import equiposRoutes from "./routes/equipos.routes";
import articulosRoutes from "./routes/articulos.routes";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/manifiestos", manifiestosRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/tipoVariables", tipoVariablesRoutes);
app.use("/api/ecri", ecriRoutes);
app.use("/api/tipoEquipo", tipoEquipoRoutes);
app.use("/api/servicios", serviciosRoutes);
app.use("/api/rutinas", rutinasRoutes);
app.use("/api/relaciones", relacionesRoutes);
app.use("/api/registros", registrosRoutes);
app.use("/api/proveedores", proveedoresRoutes);
app.use("/api/fabricantes", fabricantesRoutes);
app.use("/api/protocolos", protocolosRoutes);
app.use("/api/permisos", permisosRoutes);
app.use("/api/permisosUsuarios", permisosUsuariosRoutes);
app.use("/api/marcas", marcasRoutes);
app.use("/api/modelos", modelosRoutes);
app.use("/api/equipos", equiposRoutes);
app.use("/api/articulos", articulosRoutes);

export default app;