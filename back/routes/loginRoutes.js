import express from "express";
import { getAll, login, save } from "../controllers/loginController.js";
const router = express.Router();

router.get("/all", getAll);
// router.get("/save", save);
router.post("/login", login);

export default router;
