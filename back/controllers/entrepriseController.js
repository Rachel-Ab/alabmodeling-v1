import { Entreprise } from "../models/Entreprise.js";
import { Chantier } from "../models/Chantier.js";

export async function getAll(req, res) {
    try {
        const docs = await Entreprise.findAll();
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getBySlug(req, res) {
    try {
        const docs = await Entreprise.findOne({
            where: { slug: req.params.slug },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function allByFk(req, res) {
    try {
        const docs = await Entreprise.findAll({
            include: [{ model: Chantier, as: "chantiers" }],
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function byFk(req, res) {
    try {
        const docs = await Entreprise.findAll({
            where: { id: req.params.id },
            include: [
                {
                    model: Chantier,
                    as: "chantiers",
                },
            ],
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function create(req, res) {
    try {
        const docs = await Entreprise.create({
            name: req.body.name,
            color: req.body.color,
            logo: req.body.logo,
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function update(req, res) {
    let docs;
    const entreprise = await Entreprise.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await entreprise.update(req.body);
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function destroy(req, res) {
    let docs;
    const entreprise = await Entreprise.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await entreprise.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function save(req, res) {
    try {
        const doc = await Entreprise.create({
            name: "Goyer",
            color: "Blue",
            logo: "",
        });
        res.status(200).json({ status: "success", data: doc });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
