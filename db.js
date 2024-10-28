import { Sequelize } from "sequelize";
import {DB} from "./constants.js";
import {getLogger} from "./utils/getLogger.js";
const logger = getLogger("sequelize",true);
const sequelize = new Sequelize({
    dialect: DB.dialect,
    storage: DB.storage,
    logging:logger
});


export default sequelize;