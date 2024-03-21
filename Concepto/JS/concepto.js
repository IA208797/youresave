const tit = document.querySelector("#tit");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    const headerHeight = document.querySelector('.Encabezado').offsetHeight;
    const maxTranslateY = headerHeight - tit.offsetHeight; 
    tit.style.transform = `translateY(${Math.min(scrollY * 0.8, maxTranslateY)}px)`; 
});

menu = document.querySelector(".menu-hamburguesa");
menu.onclick = function(){
    linksNav = document.querySelector(".nav");
    linksNav.classList.toggle("active");
}