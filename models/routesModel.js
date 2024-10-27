import { DataTypes } from "sequelize";
import db from "../db.js";

const Routes = db.define(
  "routes",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    routeNo: { type: DataTypes.TEXT, allowNull: false },
    routeId: { type: DataTypes.TEXT, allowNull: false },
    type:{type:DataTypes.ENUM(["AC","NONAC"]),allowNull:false},
    startPoint: {type:DataTypes.JSON, allowNull:false},
    geometry:{type:DataTypes.TEXT,allowNull:true},
    destination: {type:DataTypes.JSON, allowNull:false}
  },
  {
    timestamps: false, // Disable createdAt and updatedAt timestamps
    freezeTableName: true,
  }
);

export default Routes;
