async function loadData(){
    const data = JSON.parse(fs.readFileSync("data.json"))
    await data.forEach(async route=>{
        route.destination ??= management.vitccLocation;
        const stopsData = [route.startPoint,...route.stops,route.destination];
        route.geometry = (await getPolygon(stopsData)).routes;
        console.log(route.geometry)

        const rec = await models.routes.create({
            routeNo:route.route_no,
            routeId:route.route_id,
            name:route.name,
            type:route.type,
            startPoint:route.startPoint,
            geometry:route.geometry
        })

        await route.stops.map(async (stop)=>{
            console.log(stop)
            stop.routeId=rec.id;
            await models.stops.create(stop)
        })

    })
}