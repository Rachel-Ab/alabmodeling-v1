import express from "express";
import entreprisesRoutes from "./entreprisesRoutes.js";
import typesRoutes from "./typesRoutes.js";
import formationsRoutes from "./formationsRoutes.js";
import logicielsRoutes from "./logicielsRoutes.js";
import informationsRoutes from "./informationsRoutes.js";
import chantiersRoutes from "./chantiersRoutes.js";
import loginRoutes from "./loginRoutes.js";
import { checkAuth } from "../middleware/checkAuth.js";

const rootRouter = express.Router();

rootRouter.use("/api/entreprise", entreprisesRoutes);
rootRouter.use("/api/type", typesRoutes);
rootRouter.use("/api/formation", formationsRoutes);
rootRouter.use("/api/logiciel", logicielsRoutes);
rootRouter.use("/api/information", informationsRoutes);
rootRouter.use("/api/chantier", chantiersRoutes);
rootRouter.use("/api/user", loginRoutes);

export default rootRouter;
