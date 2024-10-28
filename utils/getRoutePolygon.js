import {server} from "../constants.js";
const stops=[
    {
        lat:"13.06086371248775",
        long:"80.17474340004075"
    },
    {
        lat:"13.006820612694193",
        long:"80.21190171140968"
    },
    {
        lat:"12.966371290480996",
        long:"80.21695035421668"
    }
]
async function getRoutePolygon(stops){
    const qry = `${server.osrmBackendUrl}/route/v1/driving/<coordinates>?steps=false&alternatives=false&overview=full`
    var cords =  stops.map(a=>`${a.long},${a.lat}`).filter(a=>(a??false)!==false).join(";")
    var res;
    try{
        res = await (await fetch(qry.replace("<coordinates>",cords))).json();
    }catch(e){
        console.log(e);
        return await getRoutePolygon(stops);
    }
    if (res.code=='NoRoute'){
        console.error("Not routable");
    }console.log(res)
    console.log(qry.replace("<coordinates>",cords))
    return res;
}
export default getRoutePolygon;
