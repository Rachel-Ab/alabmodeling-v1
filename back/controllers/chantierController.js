import { Chantier } from "../models/Chantier.js";
import { Entreprise } from "../models/Entreprise.js";

export async function getAll(req, res) {
    try {
        const docs = await Chantier.findAll();
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getByFk(req, res) {
    try {
        const docs = await Chantier.findOne({
            where: { slug: req.params.slug },
            include: [{model: Entreprise, as: "entreprise"}]
        });
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
            entrepriseId: req.body.entrepriseId,
            key1: req.body.key1,
            key2: req.body.key2,
            key3: req.body.key3,
            key4: req.body.key4,
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
            key1: "Architecte Fr??d??ric Fisher",
            key2: "m??t??orite",
            key3: "Meteor",
            key4: "meteorite",
            intro: "Neuchatel-Suisse(2019). Oeuvre d'art 'Twilight'(90 000???)",
            specifications:
                "Verre feuillet?? mirroir r??tro-eclair?? coll?? sur une structure auto portante en inox",
            taches: "mod??lisation de l'objet en 3D(Solidworks)",
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
