import cron from "node-cron";
import express from "express";
import {server} from "./constants.js";
import updateData from "./jobs/updateData.js";
import controller from "./controller.js";

const app = express();

controller.start(app);
// cron job(s)
// cron.schedule(server.poll_cronSchedule, updateData);

app.listen(server.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`SERVER IS STARTED AT ${server.PORT}`);
  }
});
