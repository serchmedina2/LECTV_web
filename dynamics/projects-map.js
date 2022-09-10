//Se importa el archivo geojason de los estados
import { mexicoStates } from "./mexicoStates.js";

var map = L.map("map", { minZoom: 3 }).setView([20.5931, -100.392], 4);

// Inicio del Mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap",
}).addTo(map);

// Agrega la escala
new L.control.scale().addTo(map);

// Configurar PopUp

/* Funcion que asigna un popUp a cada estado del pais, cada popUp tiene informacion
 acerca de los proyectos que se llevan a cabo en el pais */
function popup(feature, layer) {
  if (feature.properties && feature.properties.sta_name) {
    switch (Number(feature.properties.sta_code)) {
      //Baja California Norte
      case 2:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Baja California Sur
      case 3:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;
      //Campeche
      case 4:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Coahuila
      case 5:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "</ul>"
        );
        break;
      //Chiapas
      case 7:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/jaguares-en-la-selva-lacandona.html>Jaguares en la selva Lacandona</a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad< </a></li>" +
            "</ul>"
        );
        break;
      //Chihuahua
      case 8:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "<li><a href=projects-section/osos.html>Osos</a></li>" +
            "<li><a href=projects-section/mina-santa-barbara.html>Mina Santa Barbara</a></li>" +
            "</ul>"
        );
      //Ciudad de Mexico
      case 9:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/cacos-en-la-cdmx.html>Cacos en la CDMX</a></li>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "<li><a href=projects-section/murcielago-citadinos.html> Murcielagos citadinos en la CDMX</a></li>" +
            "</ul>"
        );
        break;

      //Durango
      case 10:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Guerrero
      case 12:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Hidalgo
      case 13:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Jalisco default
      case 14:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            +"<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Estado de Mexico
      case 15:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "</ul>"
        );
        break;

      //Michoacan
      case 16:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/tequilas-y-mezcales.html>Tequilas y mezcales Bat Friendly</a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Morelos
      case 17:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            +"<br> <ul>" +
            "<li><a href=projects-section/murcielagos-insectivoros-morelos.html>Murciélagos insectívoros como depredadores de mosquitos de los géneros Aedes y Culex (Diptera: Culicidae), evaluación de un servicio ecosistémico</a></li>" +
            "<li><a href=projects-section/control-de-plagas.html>Control de plagas en arroz y casas de murciélagos</a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Oaxaca
      case 20:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/tequilas-y-mezcales.html>Tequilas y mezcales Bat Friendly</a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Puebla
      case 21:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Queretaro
      case 22:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Quintana Roo
      case 23:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;
      //San Luis Potosi
      case 24:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "</ul>"
        );
        break;
      //Sonora
      case 26:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/osos.html>Osos</a></li>" +
            "<li><a href=projects-section/parasitos-leptos.html>Par&aacute;sitos Leptos</a></li>" +
            "<li><a href=projects-section/pinacate-sonora.html>Pinacate, Sonora</a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;

      //Tabasco
      case 27:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/area-sitios-de-importancia-para-conservacion.html> <strong> &Aacute;reas y Sitios </strong> de Importancia para la Conservación de Murci&eacute;lagos </a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;
      //Tamaulipas
      case 28:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "</ul>"
        );
        break;
      //Tlaxcala
      case 29:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "</ul>"
        );
        break;
      //Veracruz
      case 30:
        layer.bindPopup(
          "<strong>Proyectos en: </strong><strong>" +
            feature.properties.sta_name +
            "</strong>" +
            "<br> <ul>" +
            "<li><a href=> </a></li>" +
            "<li><a href=projects-section/monitoreo-presencia-de-hongo-en-murcielagos-hibernantes.html>Monitoreo de la presencia/ausencia del hongo Pseudogymnoascus destructans en murcielagos hibernantes de México</a></li>" +
            "<li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad</a></li>" +
            "</ul>"
        );
        break;
      //Caso por defecto: estudio de las cuevas mexicanas y su diversidad
      default:
        layer.bindPopup(
          "<strong>Proyecto mantenido en: </strong><strong>" +
            "Toda la Republica" +
            "</strong>" +
            "<div><ul><li><a href=templates/projects-section/cuevas-en-mexico-y-su-diversidad.html>Cuevas en M&eacute;xico y su diversidad </a></li></ul</div>"
        );
        break;
    }
  }
}

/* Seccion donde se agregan los Estados de la republica  
    desde un archivo geoJSON*/
L.geoJSON(mexicoStates).addTo(map);

var mexicoStatesJS = L.geoJSON(mexicoStates, {
  onEachFeature: popup,
}).addTo(map);

/* Zonas de Proyectos y vinculos a cada pagina */

// Zona 1 Ciudad de Mexico
var mexicoCityCoord = [19.282735527215323, -99.16846373264458];

//Zona 2 Morelos
var morelosCoord = [18.753183784476334, -99.12198200398352];

// Zona 3 Campeche
var campecheCoord = [18.617262653856073, -89.54961227681167];

// Zona 4 Sonora y Chihuahua
var sonoraChihuahuaCoord = [29.192573254708627, -108.14619084836052];

// Zona 5 Oaxaca y Michoacan
var michoacanCoord = [19.405838879544717, -102.04578794060347];

//Zona 6 Jalisco
var jaliscoCoord = [20.566666666667, -103.67638888889];

/* Ya no cambiará el color de la zona pues ya no existirá
Unicamente cambiará al usuario a cada zona de la república 
donde se llevan a cabo proyecos */

// Agregar cambio de color en cada zona
// Agregar el resto de proyectos
var projectSelect = document.getElementById("select-project");
projectSelect.addEventListener("change", function (e) {
  let projectKey = projectSelect.value;

  switch (Number(projectKey)) {
    //!
    case 1:
      map.flyTo(mexicoCityCoord, 8);
      break;
    //!
    case 2:
      //*Morelos
      map.flyTo(morelosCoord, 8);
      break;
    //!
    case 3:
      //*Campeche
      map.flyTo(campecheCoord, 8);

      break;
    //! Proyecto
    case 4:
      //*Sonora y Chihuahua
      map.flyTo(sonoraChihuahuaCoord, 6);
      break;
    // !Cacomixtles en la CDMX
    case 5:
      map.flyTo(mexicoCityCoord, 8);
      break;
    //!
    case 6:
      //*Michoacan y Oaxaca
      map.flyTo(michoacanCoord, 8);
      map.removeLayer(michoacanZone);
      michoacanZone = L.circle(michoacanCoord, {
        color: "green",
        fillColor: "#0b6904",
        fillOpacity: 0.5,
        radius: 52000,
      }).addTo(map);
      break;
    //!
    case 7:
      //*Jalisco
      map.flyTo(jaliscoCoord, 8);
      map.removeLayer(jaliscoZone);
      jaliscoZone = L.circle(jaliscoCoord, {
        color: "green",
        fillColor: "#0b6904",
        fillOpacity: 0.5,
        radius: 52000,
      }).addTo(map);
      break;
    //!
    case 9:
      map.flyTo(mexicoCityCoord, 8);
      break;
    //!Caso por default
    default:
      map.flyTo(mexicoCityCoord, 8);
      break;
  }
});
