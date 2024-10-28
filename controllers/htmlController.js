import express from "express";
import models from "../models/models.js";
import {management} from "../constants.js";
import fs from "fs";
const router = express.Router();

router.get("/", async (req,res)=>{
    try {
        const routes = await models.routes.findAll({include:'stops'});
        console.log(JSON.parse(JSON.stringify(routes)))
        res.render("index.ejs", { inputData: btoa(JSON.stringify(routes)) });
      } catch (error) {
        console.error("Error fetching routes:", error);
        res.send(fs.readFileSync("views/error500.html").toString());
      }
})

export default router;