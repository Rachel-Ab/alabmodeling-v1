import { User } from "../models/User.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

dotenv.config();

export async function login(req, res) {
    try {
        const { username, password } = req.body;
        const hashPassword = CryptoJS.SHA1(password).toString();
        const admin = await User.findOne({
            where: {
                username: username,
                password: hashPassword,
            },
        });

        if (admin) {
            const token = jwt.sign(
                {
                    user: admin,
                },
                process.env.SECRET_KEY,
                {
                    expiresIn: 24 * 60 * 60,
                }
            );
            res.header("Authorization", "Bearer " + token);
            res.status(200).json({
                status: "success",
                data: true,
                token: token,
            });
        } else {
            res.status(401).json({ status: "success", data: false, token: false });
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getAll(req, res) {
    try {
        const docs = await User.findAll();
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function save(req, res) {
    try {
        let thisPass = CryptoJS.SHA1("pass").toString();
        const newUser = await User.create({
            username: "admin",
            password: thisPass,
        });
        res.status(200).json({ status: "success", data: newUser });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
