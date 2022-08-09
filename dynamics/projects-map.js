import { mexicoStates } from "./mexicoStates.js";

var map = L.map('map', {minZoom: 3}).setView([20.5931, -100.392], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

new L.control.scale().addTo(map);

// Configurar PopUp
function popup(feature,layer){
    if(feature.properties && feature.properties.sta_name ){
        let coordenatesPop = [19.42847, -99.12766];
        layer.bindPopup("<strong>Proyectos en: </strong><strong>" + feature.properties.sta_name + "</strong><br/>"+ 
        "<div><ul><li><a href=../statics/img/200x200.png>Console.log</a></li></ul</div>");
    }
}

// Agregar capa en formato GeoJson
L.geoJSON(mexicoStates).addTo(map);

var mexicoStatesJS = L.geoJSON(mexicoStates,{
    onEachFeature: popup
}).addTo(map);

var circulo = L.circle([19.42847, -99.12766], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var projectSelect = document.getElementById("select-project");
projectSelect.addEventListener('change', function(e){
    var projectKey = projectSelect.value;
    switch (projectSelect.value) {
        case 1:
            console.log("1")
            break;
        default:
            console.log("Ningun valor seleccionado")
            console.log(projectKey)
            break;
    }
});
/* map.flyTo(coords,13);
    circulo.color = "green";
    circulo.fillColor = "#0f7524"; */