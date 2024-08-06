const DB = {
    dialect: "sqlite",
    storage: "database.sqlite"
};

const management={
    vitccLocation:{
        name:"VIT CHENNAI",
        lat:"12.840561042795008",
        long:"80.15310348748496"
    }
}

const server={
    // resetDB:true,
    resetDB:false,
    osrmBackendUrl:"https://router.project-osrm.org",
    // osrmBackendUrl:"http://localhost:5000"
}
export default { DB,server:server,management };
