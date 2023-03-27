const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

//Scroll Reveal
const sr = ScrollReveal({
    origin: "top",
    distance: '200px',
    duration: 2500,
    delay: 100,
    reset: true
})

sr.reveal(`.home-swiper, .about, .contenido-seccion`)
sr.reveal(`.contenido-seccion, .col-resumen, .proyecto`, {interval:700})
sr.reveal(`.proyecto-1, .proyecto-3`, {origin: "left"})
sr.reveal(`.proyecto-2, .proyecto-4`, {origin: "right"})

//Función que me aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#nav__list a');
    opciones[0].className = "nav__link";
    opciones[1].className = "nav__link";
    opciones[2].className = "nav__link";
    opciones[3].className = "nav__link";
    opciones[4].className = "nav__link";
    opciones[5].className = "nav__link";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let python = document.getElementById("python");
crearBarra(python);
let java = document.getElementById("java");
crearBarra(java);
let sql = document.getElementById("sql");
crearBarra(sql);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 14, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 4, 1, intervalJavascript);
        },100);
        const intervalpython = setInterval(function(){
            pintarBarra(python, 5, 2, intervalpython);
        },100);
        const intervaljava = setInterval(function(){
            pintarBarra(java, 4, 3, intervaljava);
        },100);
        const intervalsql = setInterval(function(){
            pintarBarra(sql, 5, 4, intervalsql);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#567ebb";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}