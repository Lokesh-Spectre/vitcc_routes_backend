import { DataTypes } from "sequelize";
import db from "../db.js";

const Stops = db.define(
  "stops",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    lat: { type: DataTypes.TEXT, allowNull: false },
    long: { type: DataTypes.TEXT, allowNull: false },    
  },
  {
    timestamps: false, // Disable createdAt and updatedAt timestamps
    freezeTableName: true,
  }
);

export default Stops;
