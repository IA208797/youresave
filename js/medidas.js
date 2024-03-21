// const svg = document.querySelectorAll("#Obsesivo path");

// for (let i=0;i<svg.length;i++)
// {
//  console.log(`Letter ${i} is ${svg[i].getTotalLength()}`);
// }

let CambioColor = document.getElementById("ContenedorTexto");
let Pregunta1 = document.getElementById("Pregunta1");
let Pregunta2 = document.getElementById("Pregunta2");


function CambiarColor1(){
    CambioColor.style = "background-color: #FECBCA";
    Pregunta2.style.opacity = "0";
    Pregunta1.style.color = "black";

}
function CambiarColor2(){
    CambioColor.style = "background-color: #71ADB5";
    Pregunta1.style.opacity = "0";

}

function RegresarColor(){
    CambioColor.style = "background-color: #407087";
    Pregunta2.style.opacity = "1";
    Pregunta1.style.opacity = "1";
    Pregunta1.style.color = "white";

}

const UltimaAnimación=document.getElementById("Obsesivo");
// let Miedo=document.getElementById("Miedo");
// const Invasivo=document.getElementById("Invasivo");
// let Intimidante=document.getElementById("Intimidante");
// let Persistente=document.getElementById("Persistente");
// let Intrusivo=document.getElementById("Intrusivo");
const Miedo=document.querySelector(".Animacion3");
const Invasivo=document.getElementById("Invasivo");
const Intimidante=document.querySelector(".Animacion1");
const Persistente=document.querySelector(".Animacion4");
const Intrusivo=document.querySelector(".Animacion5");






UltimaAnimación.addEventListener("animationend", () => {
  console.log(Invasivo.id);
  Invasivo.id=
  Invasivo.removeAttribute("id");
  Invasivo.setAttribute("id","Invasivo");
});
