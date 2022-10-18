import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import route from "./routes/routes.js";
import cors from "cors";
import { sequelize } from "./config/db.js";

dotenv.config();
const app = express();
const { APP_HOST, APP_PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
        init();
    })
    .catch((error) => {
        console.error("Unable to connect to the database: ", error);
    });

async function init() {
    app.use("/", route);

    app.listen(APP_PORT, () => {
        console.log(`App listening at http://${APP_HOST}:${APP_PORT}`);
    });
}