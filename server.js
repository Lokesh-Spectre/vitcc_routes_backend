import path from "path";
import cors from "cors";
import morgan from "morgan";
import cron from "node-cron";
import express from "express";
import bodyParser from "body-parser";
import {server} from "./constants.js";
import updateData from "./jobs/updateData.js";
import { getLogger } from "./utils/getLogger.js";
import pollRouter from "./controllers/pollController.js";
import htmlRouter from "./controllers/htmlController.js";
import routeRouter from "./controllers/routeController.js";
import updateRouter from "./controllers/updateRoutesController.js";
const __dirname = import.meta.dirname;
const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use("/testApp",express.static(path.join(__dirname, 'testApp')));
app.use("/assets",express.static(path.join(__dirname, 'testApp/assets')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const morganFormat = ":method :url :status :response-time ms - :res[content-length]"
app.use(morgan(morganFormat,{stream:{write:getLogger("morgan",true)}}));
app.use(cors());

app.use("/routes", routeRouter);
app.use("/updateRoutes", updateRouter);
app.use("/",htmlRouter);
if (server.mode === "DEV") {
  app.use("/pollSampleData", pollRouter);
}

// cron job(s)
// cron.schedule(server.poll_cronSchedule, updateData);

app.listen(server.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`SERVER IS STARTED AT ${server.PORT}`);
  }
});
