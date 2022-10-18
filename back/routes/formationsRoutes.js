import express from "express";
import {
    save,
    destroy,
    getAll,
    getBySlug,
    update,
    create,
} from "../controllers/formationController.js";
const router = express.Router();

router.get("/save", save);
router.delete("/delete/:id", destroy);
router.get("/all", getAll);
router.get("/by-slug/:slug", getBySlug);
router.put("/edit/:id", update);
router.post("/add", create);

export default router;
