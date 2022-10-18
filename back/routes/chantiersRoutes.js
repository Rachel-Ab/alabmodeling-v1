import express from "express";
import {
    create,
    destroy,
    getAll,
    getBySlug,
    save,
    update,
} from "../controllers/chantierController.js";
const router = express.Router();

router.get("/save", save);
router.delete("/delete/:id", destroy);
router.get("/all", getAll);
router.get("/by-slug/:slug", getBySlug);
router.put("/edit/:id", update);
router.post("/add", create);

export default router;
