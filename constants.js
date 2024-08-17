const DB = {
    dialect: "sqlite",
    storage: "database.sqlite"
};

const management={
    vitccLocation:{
        name:"VIT CHENNAI",
        lat:"12.840561042795008",
        long:"80.15310348748496"
    },
}

const server={};
// server.resetDB=true;
server.resetDB=false;
server.osrmBackendUrl="https://router.project-osrm.org";
server.PORT=3000;
server.mode="DEV"
server.poll_url=`http://localhost:${server.PORT}/pollSampleData`;
server.poll_cronSchedule = server.mode=="PROD"? "*/30 * * * *" : "*/10 * * * * *"; // poll every 30 mins in production, poll every 10 seconds in development

// server.mode="PROD"
// server.osrmBackendUrl="http://localhost:5000";
export default { DB,server:server,management };
