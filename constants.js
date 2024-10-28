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
server.mode="PROD" // DEV or PROD
<<<<<<< HEAD
server.poll_url=server.mode == "PROD"?"https://apicc.vit.ac.in/transportApi/getTransportDetails":`http://localhost:${server.PORT}/pollSampleData`;
server.poll_cronSchedule = server.mode=="DEV"? "0 0 * * *" : "*/10 * * * * *"; // poll every day 12pm in production, poll every 10 seconds in development
=======
server.poll_url=`http://localhost:${server.PORT}/pollSampleData`;
server.poll_cronSchedule = server.mode=="PROD"? "0 0 * * *" : "*/10 * * * * *"; // poll every day 12pm in production, poll every 10 seconds in development
>>>>>>> 90dc44f26f1b8974463f637f94fc2909cafbf440
server.logs={}
// server.mode="PROD"
// server.osrmBackendUrl="http://localhost:5000";
export { DB,server,management };
