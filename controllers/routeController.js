import express from "express";
import models from "../models/models.js";
import getPolygon from "../utils/getRoutePolygon.js"
import {management} from "../constants.js";
const router = express.Router();

router.get("/",async (req,res)=>{
    const route = await models.routes.findAll({include:'stops'});
    res.status(200).send(route);
})
router.get("/:id", async (req,res)=>{
    const {id} = req.params;
    const route = await models.routes.findOne({where:{routeNo:id},include:"stops"});
    if (route){
        res.status(200).send(route);
    }else{
        res.status(401).send({message:"Route no not found"});
    }
})
router.post("/",async (req,res)=>{
    const data = req.body;
    data.destination ??= management.vitccLocation;
    const stopsData = [data.startPoint,...data.stops, data.destination];
    const polygon = (await getPolygon(stopsData)).routes;
    if (polygon.length){
        const geometry = polygon[0].geometry;
        const route = await models.routes.create({
            routeNo:data.routeNo,
            name: data.name,
            routeId:data.routeId,
            type:data.type,
            startPoint:data.startPoint,
            geometry});

        await models.stops.bulkCreate(data.stops.map(stop=>{
            stop.routeId = route.id;
            return stop
        }))
    }
    res.status(200).send({message:"route added successfully"})
})

export default router;