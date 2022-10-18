import { DataTypes } from "sequelize";
import SequelizeSlugify from "sequelize-slugify";
import { sequelize } from "../config/db.js";
import { Chantier } from "./Chantier.js";

export const Entreprise = sequelize.define("entreprises", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

Entreprise.hasMany(Chantier, {
    as: "chantiers",
});
Chantier.belongsTo(Entreprise, {
    foreignKey: "entrepriseId",
    as: "entreprise",
});
SequelizeSlugify.slugifyModel(Entreprise, { source: ["name"] });
sequelize
    .sync()
    .then(() => {
        console.log("Entreprise table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create table : ", error);
    });
