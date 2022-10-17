import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Chantier = sequelize.define("chantiers", {
    chantier_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    entreprise: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    specification: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: [{ type: DataTypes.STRING, allowNull: true }],
});
