import { Sequelize } from "sequelize";
import constants from "./constants.js";

const sequelize = new Sequelize({
    dialect: constants.DB.dialect,
    storage: constants.DB.storage
});


export default sequelize;