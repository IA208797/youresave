/*PARA EL MENU DE NAVEGACIÓN */
menu = document.querySelector(".menu-hamburguesa");
menu.onclick = function(){
    linksNav = document.querySelector(".nav");
    linksNav.classList.toggle("active");
}

/* PARA EL PARALLAX DEL TÍTULO */

const tit = document.querySelector("#tit");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    const headerHeight = document.querySelector('.Cheader').offsetHeight;
    const maxTranslateY = headerHeight - tit.offsetHeight; 
    tit.style.transform = `translateY(${Math.min(scrollY * 0.6, maxTranslateY)}px)`; 
});