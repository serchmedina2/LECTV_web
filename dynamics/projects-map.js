//Se importa el archivo geojason de los estados
import { mexicoStates } from "./georef-mexico-state-millesime.js";

var map = L.map("map", { minZoom: 3 }).setView([20.5931, -100.392], 4);

// Inicio del Mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 10,
	attribution: "© OpenStreetMap",
}).addTo(map);

// Agrega la escala
new L.control.scale().addTo(map);

//* Funcion que cambia el color del estado cuando se pasa el cursor sobre el
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 4,
		fillColor: "#d61111",
        color: '#7d0505',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}
 
//* Funcion que regresa el mapa a su color original cuando el cursos sale del estado 
function resetHighlight(e) {
    statesLayer.resetStyle(e.target);
}

/*  
* Funcion que asigna un popUp a cada estado del pais, cada popUp tiene informacion
* acerca de los proyectos que se llevan a cabo en el pais 
*/
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
												"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
												"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
						"<li><a href=> Aprovechamiento sustentable del G&uuml;ano </a></li>" +
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
//* Funcion que recoge las otras tres y les asigna los tipos de eventos que tienen que escuchar para funcionar
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: popup(feature, layer)
    });
}


/*
* Seccion donde se agregan los Estados de la republica al mapa
* desde un archivo geoJSON. Se indica que funciones se 
* ejecutan sobre cada feature del geoJSON
*/

var statesLayer = L.geoJSON(mexicoStates, {
	onEachFeature: onEachFeature,
	style: {
        color: '#34b82a',
		fillColor: "#225c1d",
		fillOpacity: 0.3
	}
})

statesLayer.addTo(map);
