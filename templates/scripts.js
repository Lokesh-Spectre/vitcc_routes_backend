const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");
let routes_names = [[],[]];
var map;
const customStoppingIcon = L.icon({
    iconUrl: 'https://static-00.iconduck.com/assets.00/bus-stop-icon-2048x2048-q0rg477o.png', // URL to the custom marker image
    iconSize: [20, 20], // Size of the icon
    iconAnchor: [10, 10], // Point of the icon which will correspond to the marker's location
    className: 'stopping-location-icon'
  });

document.addEventListener('DOMContentLoaded', () => {
    const jsonDataUrl = 'http://localhost:3000/routes';
    mapInit();
    fetch(jsonDataUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('JSON Data:', data);
            ProcessData(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
        
});


function decodePolyline(encoded) {
    var points = [];
    var index = 0, lat = 0, lng = 0;
    while (index < encoded.length) {
        var b, shift = 0, result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        var dlat = (result & 1) ? ~(result >> 1) : (result >> 1);
        lat += dlat;

        shift = 0;
        result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        var dlng = (result & 1) ? ~(result >> 1) : (result >> 1);
        lng += dlng;

        points.push([lat / 1E5, lng / 1E5]);
    }
    return points;
}

function mapInit()
{
    var route_box = document.getElementById('route-details');
    route_box.style.display = "none";
    if (map) {
        map.remove(); 
        userLocationMarker = null; 
    }

    map = L.map('map',{zoomControl: false}).setView([12.951593, 80.146214], 12); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([12.840309, 80.152963],{
            icon:L.icon({
                iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/021/815/780/small_2x/transparent-circle-icon-background-png.png',
                iconSize: [75,75],
                className: 'vitc-background'
            })
        }).addTo(map);

        L.marker([12.840309, 80.152963],{
            icon:L.icon({
                iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/018/887/506/small_2x/shapes-vintage-labels-png.png',
                iconSize: [60,60],
                className: 'vitc-background-2'
            })
        }).addTo(map);

        L.marker([12.840309, 80.152963],{
            icon:L.icon({
                iconUrl: 'https://rohan-debayan.github.io/Personal_Website_DM/images/vitlogo.png',
                iconSize: [35,35],
                className: 'vitc-background-2'
            })
        }).addTo(map);
}

function addRoute(selectedCountry) {
    options.innerHTML = "";
    routes_names[0].forEach(route => {
        let isSelected = route == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${route}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}


function updateName(selectedLi) {
    searchInp.value = "";
    addRoute(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
    index = routes_names[0].indexOf(selectedLi.innerText);
    mapInit();
    plotRoute(index);
}

function ProcessData(Data)
{
    Data.forEach((element,index) => {
        routes_names[0].push(element.routeNo + " : "+element.name);
        routes_names[1].push(element.routeNo);
    });
    console.log(routes_names[0]);
    addRoute();
    data = Data;
}
function adjustMarkerSize() {
    var zoomLevel = map.getZoom();
    var scale = Math.pow(zoomLevel / 10, 1.5); // Base scaling factor

    // Set limits for scaling factor
    var maxScale = 0.75; // Max scale (when zoomed in)
    var minScale = 0.75; // Min scale (when zoomed out)

    // Clamp the scale value between minScale and maxScale
    scale = Math.min(maxScale, Math.max(minScale, scale));

    // Apply the calculated scale to marker elements
    document.querySelectorAll('.custom-marker').forEach(function(marker) {
        marker.style.fontSize = scale + 'em';
        marker.style.padding = (scale * 0.5) + 'em';
        marker.style.borderWidth = (scale * 0.2) + 'em';
    });
}
function plotRoute(index) {
    console.log(data[index].geometry);
    var latlngs = decodePolyline(data[index].geometry);
    console.log(latlngs);
    L.polyline(latlngs, { color: "blue" }).addTo(map);
    var markerLabel = data[index].startPoint.name;
    var markerIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-label">${markerLabel}</div>`,
        iconSize: 'auto'
    });

    var marker = L.marker([data[index].startPoint.lat, data[index].startPoint.long], { icon: markerIcon })
        .addTo(map);
    
    var stopping_box_text ="";
    data[index].stops.forEach((a, b) => {
        stopping_box_text += ("Stopping-"+(b+2)+" : "+a.name+"<br>");
        var stoppingMarker = L.marker([a.lat, a.long], { icon: customStoppingIcon })
            .addTo(map)
            .bindTooltip(a.name, {
                direction: 'right',
                offset: [10, 0],
                className: 'leaflet-tooltip'
            });
        
        stoppingMarker.on('mouseover', function() {
            const tooltip = stoppingMarker.getTooltip().getElement();
            tooltip.classList.add('visible');
        });
        
        stoppingMarker.on('mouseout', function() {
            const tooltip = stoppingMarker.getTooltip().getElement();
            tooltip.classList.remove('visible');
        });
    });
    adjustMarkerSize();
    var route_box = document.getElementById('route-details');
    var main_box = document.getElementById('main-details');
    var stopping_box = document.getElementById('stopping-details');
    route_box.style.display = "flex";
    main_box.innerHTML = 'Route Name : ' + data[index].name +'<br>Starting&nbsp;Point : '+data[index].startPoint.name;
    stopping_box.innerHTML = stopping_box_text;
    map.on('zoomend', adjustMarkerSize);
    var midpoint = L.latLng(
        (13.014433 + data[index].startPoint.lat) / 2,
        (80.224255 + data[index].startPoint.long) / 2
    );
    map.flyTo(midpoint, 11)
}

function loadingOn(txt)
{
    document.getElementById('loading-screen').style.display = 'flex';
    if (txt !== undefined) {
        let tbox = document.getElementById('route-text');
        tbox.textContent = txt;
    }
}
function loadingOff()
{
    document.getElementById('loading-screen').style.display = 'none';
}


function plotAllRoutes()
{
    mapInit();
    loadingOn("All Routes");
    data.forEach((routes,index) => {
        var markerLabel = routes.name;
        var markerIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-label">${markerLabel}</div>`,
            iconSize: 'auto' // Allow auto-resizing
        });
        var marker = L.marker([routes.startPoint.lat, routes.startPoint.long], { icon: markerIcon })
        .addTo(map);
        var latlngs = decodePolyline(routes.geometry);
        L.polyline(latlngs, { color:"blue" }).addTo(map);
        map.on('zoomend', adjustMarkerSize);
    });
    loadingOff();
}

function plotByAC(condition)
{
    mapInit();
    loadingOn(condition+" Routes");
    data.forEach((routes,index) => {
        if(routes.type == condition)
        {
            console.log(routes.type);
            var latlngs = decodePolyline(routes.geometry);
            L.polyline(latlngs, { color:"blue" }).addTo(map);
            var markerLabel = routes.name;
            var markerIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-label">${markerLabel}</div>`,
            iconSize: 'auto' // Allow auto-resizing
        });
        var marker = L.marker([routes.startPoint.lat, routes.startPoint.long], { icon: markerIcon })
        .addTo(map);
        }
    });
    loadingOff();
}

function getUserLoc(callback) {
    var userLocationMarker = null;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            userlat = position.coords.latitude;
            userlng = position.coords.longitude;

            console.log("User Latitude:", userlat);
            console.log("User Longitude:", userlng);

            if (userLocationMarker) {
                userLocationMarker.setLatLng([userlat, userlng]);
            } else {
                userLocationMarker = L.marker([userlat, userlng], {
                    icon: L.divIcon({
                        className: 'user-location-icon',
                        iconSize: [24, 24],
                    })
                }).addTo(map);
            }

            if (callback) {
                callback(userlat, userlng);
            }
        }, function() {
            alert('Unable to retrieve your location.');
            if (callback) {
                callback(null, null);
            }
        }, {
            enableHighAccuracy: true, // Request high accuracy mode
            timeout: 5000, // Set a timeout of 5 seconds
            maximumAge: 0 // Prevent using cached location data
        });
    } else {
        alert('Geolocation is not supported by this browser.');
        if (callback) {
            callback(null, null);
        }
    }
}


function distance(lat1,long1,lat2,long2)
{
    return(Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(long2 - long1, 2)));
}
function findNearest()
{
    mapInit();
    loadingOn("Nearest Route");
    let usr_flg = false;
    getUserLoc(function(userlat, userlng) {
        if (userlat && userlng) {
            var min_distance = Infinity
            data.forEach((routes, index) => {
                startLat = routes.startPoint.lat;
                startLng = routes.startPoint.long;
                if(distance(userlat,userlng,startLat,startLng) < min_distance)
                {
                    min_distance = distance(userlat,userlng,startLat,startLng);
                    RIndex = index;
                    RSubIndex = -1;
                    deslat = startLat;
                    deslng = startLng;
                }
                routes.stops.forEach((route,rindex) => {
                    startLat = route.lat;
                    startLng = route.long;
                    if(distance(userlat,userlng,startLat,startLng) < min_distance)
                    {
                        min_distance = distance(userlat,userlng,startLat,startLng);
                        RIndex = index;
                        RSubIndex = rindex;
                        deslat = startLat;
                        deslng = startLng;
                    }
                });
            });
            
        } else {
            console.log("User location not available. Skipping nearest route calculation.");
            loadingOff();
        }
        plotRoute(RIndex);
        var latlngs = [[userlat,userlng],[deslat,deslng]];
        L.polyline(latlngs, {
            color: 'red',
            weight: 3,
            opacity: 1,
            className: 'dashed-line' // Apply the dashed line style
        }).addTo(map);
        var pointA = L.latLng(latlngs[0]);
        var pointB = L.latLng(latlngs[1]);
        var dist = pointA.distanceTo(pointB).toFixed(2)/1000;
        var midpoint = L.latLng(
            (pointA.lat + pointB.lat) / 2,
            (pointA.lng + pointB.lng) / 2
        );

        
        var distanceLabel = L.divIcon({
            className: 'distance-label',
            html: '<div>' + dist.toFixed(2) + ' Km</div>'
        });

        // Calculate the angle of the line to rotate the label
        var angle = Math.atan2(pointB.lat - pointA.lat, pointB.lng - pointA.lng) * (180 / Math.PI);
        
        // Place the distance label at the midpoint
        L.marker(midpoint, {
            iconSize: null,
            icon: distanceLabel
        }).addTo(map);
        loadingOff();
    });
}

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = routes_names[0].filter(data => {
        const busNo=data.toLowerCase().split(":")[0].trim();
        const Name=data.toLowerCase().split(":")[1].trim();
        // console.log("something is here")
        return Name.startsWith(searchWord) || busNo.startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});
document.getElementById("all-routes").onclick = function() {
    plotAllRoutes();
};

document.getElementById("AC-routes").onclick = function() {
    plotByAC("AC");
};

document.getElementById("NON-AC-routes").onclick = function() {
    plotByAC("NONAC");
};

document.getElementById("nearest-routes").onclick = function() {
    findNearest();
};

document.getElementById("clg-locate").onclick = function() {
    map.flyTo([12.951593, 80.146214], 11); 

};

document.getElementById("user-locate").onclick = function() {
    var userPoint = document.getElementsByClassName('user-location-icon');
    if(!userPoint[0])
    {
        getUserLoc(function(userlat,userlong) {
            map.flyTo([userlat, userlong], 14); 
        });
    } 
    else
    {
        map.flyTo([userlat, userlng], 14);
    }  
};