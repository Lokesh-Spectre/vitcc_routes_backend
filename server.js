import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routeRouter from "./controllers/routeController.js";
import updateData from "./jobs/updateData.js";
import cors from "cors";
import cron from "node-cron";
import constants from "./constants.js";
import pollRouter from "./controllers/pollController.js";
import models from "./models/models.js";
const server = constants.server;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("short"))
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send("VITCC BUS ROUTES DISPLAY BACKEND");
})
if (server.mode=="DEV"){
    app.use("/pollSampleData",pollRouter);
}

// controllers
app.use("/routes",routeRouter);
cron.schedule(server.poll_cronSchedule,updateData)
app.listen(server.PORT,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log(`SERVER IS STARTED AT ${server.PORT}`);
    }
})