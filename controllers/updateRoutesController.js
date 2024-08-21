import express from "express";
import models from "../models/models.js";
import getPolygon from "../utils/getRoutePolygon.js"
import {management} from "../constants.js";

const router = express.Router();

router.post("/",async (req,res)=>{
    // const res = await fetch(server.poll_url);
    try{
        const routes = await req.body;
        await models.routes.destroy({where:{},truncate:true})
        for (const route of routes){
            route.destination ??= management.vitccLocation;
            route.startPoint ??= route.stops.shift()
            const stopsData = [route.startPoint,...route.stops, route.destination];
            const polygon = (await getPolygon(stopsData)).routes;
            if (polygon.length){
                const geometry = polygon[0].geometry;
                const routeRec = await models.routes.create({
                    routeNo:route.routeNo,
                    name: route.name,
                    routeId:route.routeId,
                    type:route.type,
                    startPoint:route.startPoint,
                    geometry});
                await models.stops.bulkCreate(route.stops.map(stop=>{
                    stop.routeId = routeRec.id;
                    return stop
                }))
            }
        }
        res.status(200).send("ROUTES ARE UPDATED SUCCESSFULLY")
    }catch(e){
        console.log(`ERROR UPDATING DATA\n ${e} \n STACK:\n${e.stack}`);
        res.status(500).send("ERROR UPDATING DATA");
    }
})
export default router;