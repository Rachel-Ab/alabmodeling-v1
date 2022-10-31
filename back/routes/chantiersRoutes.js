import express from "express";
import {
    create,
    destroy,
    getAll,
    getByFk,
    getBySlug,
    save,
    update,
} from "../controllers/chantierController.js";
import { checkAuth } from "../middleware/checkAuth.js";
const router = express.Router();

router.get("/save", save);
router.delete("/delete/:id",checkAuth, destroy);
router.get("/all", getAll);
router.get("/by-slug/:slug", getBySlug);
router.get("/by-slug-fk/:slug", getByFk);
router.put("/edit/:id",checkAuth, update);
router.post("/add",checkAuth, create);

export default router;
