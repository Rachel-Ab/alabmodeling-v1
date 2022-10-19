import express from "express";
import {
    allByFk,
    byFk,
    create,
    destroy,
    getAll,
    getBySlug,
    save,
    update,
} from "../controllers/entrepriseController.js";
import { checkAuth } from "../middleware/checkAuth.js";
const router = express.Router();

// router.get("/save", save);
router.get("/all-byFk", allByFk);
router.get("/byFk/:id", byFk);
router.delete("/delete/:id",checkAuth, destroy);
router.get("/all", getAll);
router.get("/by-slug/:slug", getBySlug);
router.put("/edit/:id",checkAuth, update);
router.post("/add",checkAuth, create);

export default router;
