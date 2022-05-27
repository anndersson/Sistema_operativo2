// etiquetas del index



//FUNCION
function activar(){
    var menu = document.getElementById('menu');
    

   
    menu.classList.remove("menu1");
}

function ocultar(){
    var menu = document.getElementById('menu');

    

    menu.classList.add("menu1");

}

function activar_2(){
    var spotify = document.getElementById('spotify');

    spotify.classList.remove("activar_2")
    
}

function cerrar(){
    var spotify = document.getElementById('spotify');

    spotify.classList.add("activar_2")
    
}

//Evento
ico_menu2.addEventListener("click",ocultar)