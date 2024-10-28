import cors from "cors";
import path from "path";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import { getLogger } from "./utils/getLogger.js";

import pollRouter from "./controllers/pollController.js";
import htmlRouter from "./controllers/htmlController.js";
import routeRouter from "./controllers/routeController.js";
import updateRouter from "./controllers/updateRoutesController.js";

import {server} from "./constants.js";

const __dirname = import.meta.dirname;

const controller = {}

controller.setHelpers = (app)=>{
    const morganFormat = ":method :url :status :response-time ms - :res[content-length]"
    
    app.set("view engine", "ejs");
    
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan(morganFormat,{stream:{write:getLogger("morgan",true)}}));
}

controller.setStatics = (app)=>{
    app.use(express.static(path.join(__dirname, 'public')));
    app.use("/testApp",express.static(path.join(__dirname, 'testApp')));
    app.use("/assets",express.static(path.join(__dirname, 'testApp/assets')));
}

controller.linkRoutes = (app)=>{
    app.use("/routes", routeRouter);
    app.use("/updateRoutes", updateRouter);
    app.use("/",htmlRouter);
    if (server.mode === "DEV") {
      app.use("/pollSampleData", pollRouter);
    }
}
controller.start = (app)=>{
    controller.setHelpers(app);
    controller.setStatics(app);
    controller.linkRoutes(app);
}
export default controller;