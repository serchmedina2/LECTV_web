const toggle = document.getElementById('toggle-btn');
const menu = document.querySelector('.nav-menu')
toggle.addEventListener('click',function(){
    toggle.classList.toggle('active');
    menu.classList.toggle('toggle');
})