import cron from "node-cron";
import express from "express";
import {server} from "./constants.js";
import updateData from "./jobs/updateData.js";
import controller from "./controller.js";

const app = express();

controller.start(app);
<<<<<<< HEAD

//cron.schedule(server.poll_cronSchedule, updateData);
=======
// cron job(s)
// cron.schedule(server.poll_cronSchedule, updateData);
>>>>>>> 90dc44f26f1b8974463f637f94fc2909cafbf440

app.listen(server.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`SERVER IS STARTED AT ${server.PORT}`);
  }
});
