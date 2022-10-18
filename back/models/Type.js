import { DataTypes } from "sequelize";
import SequelizeSlugify from "sequelize-slugify";
import { sequelize } from "../config/db.js";
import { Formation } from "./Formation.js";

export const Type = sequelize.define("types", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
});

Type.hasMany(Formation, {
    as: "formations",
});
Formation.belongsTo(Type, {
    foreignKey: "typeId",
    as: "type",
});
SequelizeSlugify.slugifyModel(Type, { source: ["name"] });
sequelize
    .sync()
    .then(() => {
        console.log("Type table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create table : ", error);
    });
