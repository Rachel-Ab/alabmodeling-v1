import { Information } from "../models/Information.js";

export async function getAll(req, res) {
    try {
        const docs = await Information.findAll();
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getBySlug(req, res) {
    try {
        const docs = await Information.findOne({
            where: { slug: req.params.slug },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function create(req, res) {
    try {
        const docs = await Information.create({
            name: req.body.name,
            titre: req.body.titre,
            birth: req.body.birth,
            permis: req.body.permis,
            infos: req.body.infos,
            phone: req.body.phone,
            email: req.body.email,
            company: req.body.company,
            logo: req.body.logo,
            linkedin: req.body.linkedin,
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function update(req, res) {
    let docs;
    const information = await Information.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await information.update(req.body);
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function destroy(req, res) {
    let docs;
    const information = await Information.findOne({
        where: { id: req.params.id },
    });
    try {
        docs = await information.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function save(req, res) {
    try {
        const doc = await Information.create({
            name: "Abenzoar Alex",
            titre: "Projeteur 3D / responsable BE",
            birth: "1974-03-30",
            permis: "Permis B - Véhiculé",
            infos: "Expertise sur la conduite au changement pour déployer un logiciel 3D et Réferent B.I.M",
            phone: "01-01-01-01-01",
            email: "",
            company: "VLD Paris",
            logo: "",
            linkedin: "www.linkedin.com/in/alex-abenzoar",
        });
        res.status(200).json({ status: "success", data: doc });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
