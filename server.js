import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routeRouter from "./controllers/routeController.js";
import cors from "cors";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("short"))
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send("VITCC BUS ROUTES DISPLAY BACKEND");
})

// controllers
app.use("/routes",routeRouter);
const PORT = 3000;
app.listen(PORT,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log(`SERVER IS STARTED AT ${PORT}`);
    }
})