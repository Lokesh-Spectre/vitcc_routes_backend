import {server,management} from "../constants.js"; 
import models from "../models/models.js";
import getPolygon from "../utils/getRoutePolygon.js";
import { getLogger } from "../utils/getLogger.js";
<<<<<<< HEAD
import fetch from "node-fetch";
import https from "https";

const agent = new https.Agent({
    rejectUnauthorized:false
})

const log = getLogger("dataPolling")
async function updateData(){
    console.log("sp,etjomg")
    try{
        const time= new Date().getTime();
        const res = await fetch(server.poll_url,{agent});
        // const data= await res.json();
        const routes = JSON.parse((await res.text()).replaceAll("longitude","long"));
        await models.routes.destroy({where:{},truncate:true});
        await models.stops.destroy({where:{},truncate:true});
=======

const log = getLogger("dataPolling")
async function updateData(){
    try{
        const time= new Date().getTime();
        const res = await fetch(server.poll_url);
        // const data= await res.json();
        const routes = JSON.parse((await res.text()).replaceAll("longitude","long"))
        await models.routes.destroy({where:{},truncate:true})
>>>>>>> 90dc44f26f1b8974463f637f94fc2909cafbf440
        for (const route of routes){
            route.destination ??= management.vitccLocation;
            route.startPoint ??= route.stops.shift()
            const stopsData = [route.startPoint,...route.stops, route.destination];
<<<<<<< HEAD
            var geometry=null;
            if (stopsData[1].lat !=0 && stopsData[1].long!=0){
                const polygon = (await getPolygon(stopsData)).routes;
                if (polygon.length){
                    geometry = polygon[0].geometry;
                }
            }
            const routeRec = await models.routes.create({
                routeNo:route.routeNo,
                name: route.name,
                routeId:route.routeId,
                type:route.type,
                startPoint:route.startPoint,
                destination:route.destination,
                geometry});
            await models.stops.bulkCreate(route.stops.map(stop=>{
                stop.routeId = routeRec.id;
                return stop
            }))
        }
        console.log(`Update function SUCCESSFUL. processing time: ${(new Date().getTime() - time)} ms\tNo of routes:${routes.length}`)
        console.log(`Update function call @${new Date(time).toISOString()} took ${(new Date().getTime() - time)} ms to complete successfully`)
=======
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
        log(`Update function SUCCESSFUL. processing time: ${(new Date().getTime() - time)} ms\tNo of routes:${routes.length}`)
        log(`Update function call @${new Date(time).toISOString()} took ${(new Date().getTime() - time)} ms to complete successfully`)
>>>>>>> 90dc44f26f1b8974463f637f94fc2909cafbf440
    } catch (e){
        console.log(`##ERROR\n${e}\nSTACK:\n${e.stack}`);
    }
    
}

export default updateData;