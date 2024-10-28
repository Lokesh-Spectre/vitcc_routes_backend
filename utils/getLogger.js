import fs from "fs"
import {server} from "../constants.js";
function getLogStream(mode){
    !fs.existsSync("logs") ?fs.mkdirSync("logs"):"";
    var logs = fs.readdirSync("logs/");
    logs = logs.filter((file)=> file.match(`${mode}\\.\\d*\\.log`)??0);
    logs.sort((a,b)=>parseInt(a.split('.')[1]) - parseInt(b.split('.')[1]))
    var log_file;
    if (logs.length){
        const logNo = parseInt(logs[logs.length-1].split(".")[1])+1
        log_file = `logs/${mode}.${logNo}.log`;
    }else{
        log_file = `logs/${mode}.0.log`;
    }
    return fs.createWriteStream(log_file,{flags:"a"});
}
function getLogger(mode,display){
    var logStream = getLogStream(mode);
    var log;
    server.logs[mode] = new Date().getTime()
    if(mode === "morgan"){
        log = (msg)=>`${new Date().toISOString()} ${msg}`
    }else{
        log = (msg)=>`${new Date().toISOString()} ${msg}\n`
    }
    function logFileCheck(){
        if (new Date().getTime() - server.logs[mode] > 10000){ // one day has past 86400000
            logStream.close();
            logStream = getLogStream(mode);
            server.logs[mode] = new Date().getTime();
        }
    }
    if (display){
        
        return async (msg)=> {
            logFileCheck();
            logStream.write(log(msg))
            process.stdout.write((mode=="morgan"?"\x1b[38;5;81m":"\x1b[38;5;42m") + log(msg) + "\x1b[38;5;255m")
        }
    }else{
        return async (msg)=>{
            logFileCheck();
            logStream.write(log(msg))
        };
    }
    
}
export {getLogStream,getLogger};