import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const User = sequelize.define("users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

sequelize
    .sync()
    .then(() => {
        console.log("User table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create table : ", error);
    });
