import {  DataTypes } from "sequelize";
import SequelizeSlugify from "sequelize-slugify";
import { sequelize } from "../config/db.js";

export const Formation = sequelize.define("formations", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.SMALLINT,
        allowNull: true,
    }
});

SequelizeSlugify.slugifyModel(Formation, { source: ["name"] });
sequelize
    .sync()
    .then(() => {
        console.log("Formation table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create table : ", error);
    });
