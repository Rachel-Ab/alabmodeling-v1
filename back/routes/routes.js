import express from "express";
import entreprisesRoutes from "./entreprisesRoutes.js";

const rootRouter = express.Router();

rootRouter.use("/api/entreprise", entreprisesRoutes);

export default rootRouter;
