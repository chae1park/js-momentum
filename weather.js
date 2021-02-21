const weather = document.querySelector("js-weather")

const API_KEY = "f1c79687f98cd1b1716bc528bcea78c4";
const COORDS = 'coords';
function getWeather(lat,long){
    fetch(
        ''
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log("hgeo");
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoErr(){
    console.log('Cant access geo location')
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoErr);

}

function loadCoords(){

    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords == null){
        askForCoords();
    } else{
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
        // getWeather
    }

}

function init(){
    loadCoords();
}

init()