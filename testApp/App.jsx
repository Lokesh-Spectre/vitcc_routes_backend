import "./App.css";
import "leaflet/dist/leaflet.css";
import "react-leaflet-fullscreen/styles.css";
import { MapContainer, TileLayer,Marker,Popup,Polyline,useMap } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import fs from "fs";
import { useEffect, useState,useRef } from "react";
import L from "leaflet"
import "leaflet-easybutton/src/easy-button.js"
import "leaflet-easybutton/src/easy-button.css"
import FileButton from "./FileButton";


var stopIcon = L.icon({
  iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png"
})


export default function App() {
  const [locations,setLocations] = useState({});
  // const [map, setMap] = useState(null);
  const InputRef = useRef()


  // useEffect(()=>{
  //   fetch("http://localhost:3000/testData").then(resp=>resp.json()).then((data=>{
  //     console.log(data)
  //     setLocations(data)}));
  // },[])
  
  function fileHandler(e){
    console.log("Btn works hurreyy!!!")
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0],"UTF-8");
    fileReader.onload = e=>{
      const Filedata = JSON.parse(e.target.result);
      const markers = Filedata
        .filter(bus=>bus.currentStatus=="IDLE"||bus.speed==0)
        .map(bus=>{
            return {geocode:[bus.latitude,bus.longitude],
                message:`Time: ${bus.createdAt}`
            }
        })
      const pathData = Filedata.sort((a,b)=>new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()).map(bus=>{
          return [bus.latitude,bus.longitude]})
      const data = {markers,pathData}
      
      console.log(data);
      setLocations(data)
      // console.log("e.target.result",e.target.result);
    }
  }
  const markers = locations.markers;
  // fileButton()
  return (
    <MapContainer 
      center={[12.890986095039509,80.14712801395345]}
      zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          locations.markers?markers.map(marker=>(<Marker position={marker.geocode} icon={stopIcon}>
            <Popup>
              {marker.message}
            </Popup>
                      </Marker>)):<></>
        }
        {
          locations.pathData?<Polyline positions={locations.pathData}/>:<></>
        }
        <input type="file" ref={InputRef} style={{display:'none'}} onChange={fileHandler}/>
        <FileButton
          title={"Upload JSON"}
          description={"Upload file through this button"}
          onClickFunction={()=>InputRef.current.click()}
          // handle={}
        />
        <FullscreenControl/>
    </MapContainer>
  );
}