import { Logiciel } from "../models/Logiciel.js";

export async function getAll(req, res) {
    try {
        const docs = await Logiciel.findAll();
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getBySlug(req, res) {
    try {
        const docs = await Logiciel.findOne({
            where: { slug: req.params.slug },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function create(req, res) {
    try {
        const docs = await Logiciel.create({
            name: req.body.name,
            content: req.body.content,
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function update(req, res) {
    let docs;
    const logiciel = await Logiciel.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await logiciel.update(req.body);
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function destroy(req, res) {
    let docs;
    const logiciel = await Logiciel.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await logiciel.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function save(req, res) {
    try {
        const doc = await Logiciel.create({
            name: "BIM (Building Information Modeling)",
            content: "Notion sur REVIT et Dynamo",
        });
        res.status(200).json({ status: "success", data: doc });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
