/**Obtiene los elementos de boton y menu 
 * agrega un event listener para el boton y 
 * este agrega clases que modifican los estilos de los elementos  
*/
const toggle = document.getElementById('toggle-btn');
const menu = document.querySelector('.nav-menu')
toggle.addEventListener('click',function(){
    toggle.classList.toggle('active');
    menu.classList.toggle('toggle');
})
toggle.addEventListener('focus', function(){
    toggle.classList.toggle('active');
    menu.classList.toggle('toggle');
})
