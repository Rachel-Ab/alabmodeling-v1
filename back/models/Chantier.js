import { DataTypes } from "sequelize";
import SequelizeSlugify from "sequelize-slugify";
import { sequelize } from "../config/db.js";

export const Chantier = sequelize.define("chantiers", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
    key1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    key2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    key3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    key4: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    intro: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    specifications: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    taches: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    img1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    img2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    img3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

SequelizeSlugify.slugifyModel(Chantier, { source: ["name"] });
sequelize
    .sync()
    .then(() => {
        console.log("Chantier table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create table : ", error);
    });
