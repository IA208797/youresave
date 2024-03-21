/*PARA EL MENU DE NAVEGACIÓN */
menu = document.querySelector(".menu-hamburguesa");
menu.onclick = function(){
    linksNav = document.querySelector(".nav");
    linksNav.classList.toggle("active");
}

/*TITULO*/
const title = document.querySelector("#title");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    const headerHeight = document.querySelector('.intro-titulo').offsetHeight;
    const maxTranslateY = headerHeight - title.offsetHeight; 
    title.style.transform = `translateY(${Math.min(scrollY * 0.8, maxTranslateY)}px)`; 
});


/* PARA EL CUESTIONARIO */

//Arreglo con preguntitas.
const preguntas = [
    {
        pregunta : "¿Recibe repetidas llamadas de teléfono o multiples mensajes no deseados?",
        respuestas: [
            {text: "Sí", correcto: "true"},
            {text: "No", correcto: "false"},
        ]
    }, 
    {
        pregunta : "¿Se ha sentido observado o seguido constantemente?",
        respuestas: [
            {text: "Sí", correcto: "true"},
            {text: "No", correcto: "false"},
        ]
    }, 
    {
        pregunta : "¿El acosador ha realizado acciones que lo controlan, rastrean o asustan?",
        respuestas: [
            {text: "Sí", correcto: "true"},
            {text: "No", correcto: "false"},
        ]
    },
    {
        pregunta : "¿Experimenta ansiedad, miedo o paranoia constantemente?",
        respuestas: [
            {text: "Sí", correcto: "true"},
            {text: "No", correcto: "false"},
        ]
    }, 
    {
        pregunta : "¿El acosador usa a personas para comunicarse o tener algún contacto con usted?",
        respuestas: [
            {text: "Sí", correcto: "true"},
            {text: "No", correcto: "false"},
        ]
    },
    {
        pregunta : "¿Puede identificar quien es su acosador?",
        respuestas: [
            {text: "Sí", correcto: "true"},
            {text: "No", correcto: "false"},
        ]
    }
];

//Se recoleta el ID de los botones de las preguntas, de las respuestas y del boton para avanzar a la sig. pregunta.
const preguntaID = document.getElementById("pregunta");
const respuestasID = document.getElementById("respuestas");
const btnSiguiente = document.getElementById("siguiente");

let preguntaActualIndex = 0;
let puntajeTotal = 0;

function comenzar(){ //Se da comienzo al quiz y se resetean los valores del puntaje e index.
    preguntaActualIndex = 0;
    puntajeTotal = 0;
    btnSiguiente.innerHTML = "Siguiente";
    mostrarPreguntas();
}

function mostrarPreguntas(){
    resetearQuiz(); //Sirve para quitar las preguntas del html.

    let preguntaActual = preguntas[preguntaActualIndex];
    let numPregunta = preguntaActualIndex + 1;
    preguntaID.innerHTML = numPregunta + ". " + preguntaActual.pregunta;

    preguntaActual.respuestas.forEach(respuesta =>{
        const boton = document.createElement("button");
        boton.innerHTML = respuesta.text;
        boton.classList.add("btn");
        respuestasID.appendChild(boton);

        if(respuesta.correcto){
            boton.dataset.correcto = respuesta.correcto; //Añadirá ya sea falso o verdadero en el dataset del botón.
        }

        //Para marcar la respuesta
        boton.addEventListener("click", respuestaSeleccion); //Llama a la función respuestaSeleccion
    });
}

function resetearQuiz(){ //Remueve las respuestas iniciales del html
    btnSiguiente.style.display = "none";
    while(respuestasID.firstChild){
        respuestasID.removeChild(respuestasID.firstChild);
    }
}

function respuestaSeleccion(e){
    const botonSeleccionado = e.target;
    const esCorrecto = botonSeleccionado.dataset.correcto === "true";
    
    //Al ser un quiz de autoconocimiento, no hay respuestas correctas ni incorrectas, por lo tanto 
    //la clase correcto e incorrecto colorea del mismo color las respuestas.
    if(esCorrecto){
        botonSeleccionado.classList.add("correcto");
        puntajeTotal++;
    }else{
        botonSeleccionado.classList.add("incorrecto");
    }

    Array.from(respuestasID.children).forEach(boton =>{
        /*if(boton.dataset.correcto === "true" ){
            boton.classList.add("correcto");
        }*/
        boton.disabled = true;

    });

    btnSiguiente.style.display = "block";
}

function mostrarPuntaje(){
    resetearQuiz();
    
    if(puntajeTotal === 0 || puntajeTotal === 1 ){
        preguntaID.innerHTML = `No eres víctima de stalking.`;
        btnSiguiente.innerHTML = "Contestar otra vez";
        btnSiguiente.style.display = "block";
    }else if(puntajeTotal === 1 || puntajeTotal === 2 ){
        preguntaID.innerHTML = `Checa bien tus cuentas. Es poco probable que seas víctima de stalking.`;
        btnSiguiente.innerHTML = "Contestar otra vez";
        btnSiguiente.style.display = "block";
    }
    else if(puntajeTotal === 3 || puntajeTotal === 4 ){
        preguntaID.innerHTML = `Bloquea tus redes sociales. Es probable que seas víctima de stalking.`;
        btnSiguiente.innerHTML = "Contestar otra vez";
        btnSiguiente.style.display = "block";
    }
    else if(puntajeTotal === 5 || puntajeTotal === 6 ){
        preguntaID.innerHTML = `¡Pide ayuda! Tienes una alta probabilidad de ser víctima de stalking.`;
        btnSiguiente.innerHTML = "Contestar otra vez";
        btnSiguiente.style.display = "block";
    }
    
}

function handleSiguienteBoton(){
    preguntaActualIndex++;
    if(preguntaActualIndex < preguntas.length){
        mostrarPreguntas();
    }else{
        mostrarPuntaje();
    }
}

btnSiguiente.addEventListener("click", ()=>{
    if(preguntaActualIndex < preguntas.length){
        handleSiguienteBoton();
    }else{
        comenzar();
    }
})

comenzar();