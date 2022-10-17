import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Entreprise = sequelize.define("entreprises", {
    entreprise_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

sequelize.sync().then(() => {
    console.log('Entreprise table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });