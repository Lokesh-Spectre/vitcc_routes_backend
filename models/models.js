import routesModel from "./routesModel.js";
import stopsModel from "./stopsModel.js";
import sequelize from "../db.js";

import {server} from "../constants.js";
// keep in mind
// things can be automatically imported and added to models:
// sequelize.models gives {'modelName':modelObject,...}
// all relations here
routesModel.hasMany(stopsModel)
stopsModel.belongsTo(routesModel)

// finish up and export all models
await sequelize.sync({ force: server.resetDB })
const models ={
    routes:routesModel,
    stops:stopsModel,
}
export {routesModel,stopsModel};
export default models;