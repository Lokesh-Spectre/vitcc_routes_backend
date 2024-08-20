import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routeRouter from "./controllers/routeController.js";
import updateData from "./jobs/updateData.js";
import cors from "cors";
import cron from "node-cron";
import constants from "./constants.js";
import pollRouter from "./controllers/pollController.js";
import updateRouter from "./controllers/updateRoutesController.js";
import fetch from "node-fetch"; 
import path from "path";
const server = constants.server;

const __dirname = import.meta.dirname;
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("short"));
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await fetch("http://localhost:3000/routes");
    const routesData = await response.json();
    res.render("index.ejs", { inputData: btoa(JSON.stringify(routesData)) });
    console.log(routesData)
  } catch (error) {
    console.error("Error fetching routes:", error);
    res.status(500).send("Error fetching routes data");
  }
});

app.use("/routes", routeRouter);
app.use("/updateRoutes", updateRouter);

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
