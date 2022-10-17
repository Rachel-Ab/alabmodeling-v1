import express from "express";
import { save } from "../controllers/entrepriseController.js";
const router = express.Router();

router.get("/save", save);

export default router;
