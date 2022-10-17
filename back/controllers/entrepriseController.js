import { Entreprise } from "../models/Entreprise.js";

export async function getAll(req, res) {
    try {
        const docs = await Entreprise.find({});
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function save(req, res) {
    try {
        const doc = await Entreprise.create({
            name: "Goyer",
            color: "Blue",
        });
        res.status(200).json({ status: "success", data: doc });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
