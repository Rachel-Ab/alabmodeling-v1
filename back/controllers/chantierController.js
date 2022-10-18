import { Chantier } from "../models/Chantier.js";

export async function getAll(req, res) {
    try {
        const docs = await Chantier.findAll();
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getBySlug(req, res) {
    try {
        const docs = await Chantier.findOne({
            where: { slug: req.params.slug },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function create(req, res) {
    try {
        const docs = await Chantier.create({
            name: req.body.name,
            architecte: req.body.architecte,
            intro: req.body.intro,
            specifications: req.body.specifications,
            taches: req.body.taches,
            img1: req.body.img1,
            img2: req.body.img2,
            img3: req.body.img3,
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function update(req, res) {
    let docs;
    const chantier = await Chantier.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await chantier.update(req.body);
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function destroy(req, res) {
    let docs;
    const chantier = await Chantier.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await chantier.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function save(req, res) {
    try {
        const doc = await Chantier.create({
            name: "Twilight",
            architecte: "Architecte Frédéric Fisher",
            intro: "Neuchatel-Suisse(2019). Oeuvre d'art 'Twilight'(90 000€)",
            specifications:
                "Verre feuilleté mirroir rétro-eclairé collé sur une structure auto portante en inox",
            taches: "modélisation de l'objet en 3D(Solidworks)",
            img1: "",
            img2: "",
            img3: "",
            entrepriseId: 2,
        });
        res.status(200).json({ status: "success", data: doc });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
