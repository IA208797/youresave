document.addEventListener("DOMContentLoaded", function() {
    const modosPreventivos = document.querySelectorAll('.modopreventivo');
    const informaciones = document.querySelectorAll('.Informacion');

    modosPreventivos.forEach(modoPreventivo => {
        modoPreventivo.addEventListener('click', function() {
            const infoId = this.getAttribute('data-info');
            const informacion = document.getElementById(infoId);
            
            informaciones.forEach(info => {
                if (info !== informacion) {
                    info.classList.remove('active');
                }
            });

            informacion.classList.toggle('active');
        });
    });

    informaciones.forEach(info => {
        info.addEventListener('click', function(event) {
            event.stopPropagation();
            this.classList.remove('active');
        });
    });
});

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