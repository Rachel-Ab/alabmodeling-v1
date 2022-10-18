import { Type } from "../models/Type.js";
import { Formation } from "../models/Formation.js";

export async function getAll(req, res) {
    try {
        const docs = await Type.findAll();
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getBySlug(req, res) {
    try {
        const docs = await Type.findOne({
            where: { slug: req.params.slug },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function allByFk(req, res) {
    try {
        const docs = await Type.findAll({
            include: [{ model: Formation, as: "formations" }],
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function byFk(req, res) {
    try {
        const docs = await Type.findAll({
            where: { id: req.params.id },
            include: [
                {
                    model: Formation,
                    as: "formations",
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
        const docs = await Type.create({
            name: req.body.name,
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function update(req, res) {
    let docs;
    const type = await Type.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await type.update(req.body);
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function destroy(req, res) {
    let docs;
    const type = await Type.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await type.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function save(req, res) {
    try {
        const doc = await Type.create({
            name: "Test",
        });
        res.status(200).json({ status: "success", data: doc });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
