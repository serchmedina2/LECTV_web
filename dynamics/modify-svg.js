let textoContenedor = document.getElementsByTagName("text");
let coord = textoContenedor.forEach((text) => text.getBoundingClientRect());
console.log(coord[0]);

/* 
textElement => {
    textElement.getBoundingClientRect();
} */

/* coord.forEach(coordElement=>{
    coordElement.top;
}) */