import express from "express";
import {
    save,
    destroy,
    getAll,
    getBySlug,
    update,
    create,
} from "../controllers/informationController.js";
import { checkAuth } from "../middleware/checkAuth.js";
const router = express.Router();

router.get("/save", save);
router.delete("/delete/:id",checkAuth, destroy);
router.get("/all", getAll);
router.get("/by-slug/:slug", getBySlug);
router.put("/edit/:id",checkAuth, update);
router.post("/add",checkAuth, create);

export default router;
