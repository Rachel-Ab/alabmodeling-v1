import { DataTypes } from "sequelize";
import SequelizeSlugify from "sequelize-slugify";
import { sequelize } from "../config/db.js";

export const Logiciel = sequelize.define("logiciels", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
});

SequelizeSlugify.slugifyModel(Logiciel, { source: ["name"] });
sequelize
    .sync()
    .then(() => {
        console.log("Logiciel table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create table : ", error);
    });
