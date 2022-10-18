import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Information = sequelize.define("informations", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    permis: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    infos: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    linkedin: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

sequelize
    .sync()
    .then(() => {
        console.log("Information table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create table : ", error);
    });
