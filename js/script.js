/*PARA EL MENU DE NAVEGACIÓN */
menu = document.querySelector(".menu-hamburguesa");
menu.onclick = function(){
    linksNav = document.querySelector(".nav");
    linksNav.classList.toggle("active");
}