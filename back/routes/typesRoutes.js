import express from "express";
import {
    allByFk,
    byFk,
    destroy,
    getAll,
    save,
    getBySlug,
    update,
    create,
} from "../controllers/typeController.js";
const router = express.Router();

// router.get("/save", save);
router.get("/all-byFk", allByFk);
router.get("/byFk/:id", byFk);
router.delete("/delete/:id", destroy);
router.get("/all", getAll);
router.get("/by-slug/:slug", getBySlug);
router.put("/edit/:id", update);
router.post("/add", create);

export default router;
