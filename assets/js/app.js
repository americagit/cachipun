// paso 1.
let opt_piedra = document.getElementById("piedra");
let opt_papel = document.getElementById("papel");
let opt_tijera = document.getElementById("tijera");



// paso 3.
let img_opt_player1 = document.getElementById("player_1");
// paso 4
let img_opt_player2 = document.getElementById("player_2");


// paso 2.
let select_player_1 = "0"
// paso 4
let select_player_2 = "0"



function opPC() {
    select_player_2 = opt_random(val_opt_random.toString());
    display_option_player2(select_player_2); // llama a la funcion que pone la imagen de la selecion de la cpu 
}

// poner imagen de seleccion primer jugador
opt_piedra.onclick = function () {
    select_player_1 = "piedra"
    img_opt_player1.innerHTML = '<i id="piedra" class="fa-solid fa-hand-back-fist fa-beat fa-2xl" style="color: #B197FC; cursor: pointer"></i>';

}

opt_papel.onclick = function () {
    select_player_1 = "papel"
    img_opt_player1.innerHTML = '<i id="papel" class="fa-solid fa-hand fa-beat fa-2xl" style="cursor: pointer;"></i>';
}

opt_tijera.onclick = function () {
    select_player_1 = "papel"
    img_opt_player1.innerHTML = '<i id="tijera" class="fa-solid fa-hand-scissors fa-beat fa-2xl" style="cursor: pointer;"></i>';
}
// fin paso 2
 
// randon cpu
let val_opt_random = ["piedra", "papel", "tijera"];
// paso 6 crear funcion randomw autiliza en funtion click star_game
function opt_random() {
   
    return [...val_opt_random]
    .sort(() => Math.random() > 0.5 ? 1 : -1)
    .slice(0,1);
}

// muestre imagen de seleccion cpu concordando con lo que trajo random

function display_option_player2(select_player_2) {
    if (select_player_2 == "piedra") {
        img_opt_player2.innerHTML = '<i id="piedra" class="fa-solid fa-hand-back-fist fa-beat fa-2xl" style="color: #B197FC; cursor: pointer"></i>';
    } else if (select_player_2 == "papel") {
        img_opt_player2.innerHTML = '<i id="papel" class="fa-solid fa-hand fa-beat fa-2xl" style="cursor: pointer;"></i>';
    } else {
        img_opt_player2.innerHTML = '<i id="tijera" class="fa-solid fa-hand-scissors fa-beat fa-2xl" style="cursor: pointer;"></i>';
    }
}

// funcioniniciar


opt_piedra.addEventListener('click', function () {
    opcionJugador = "piedra"
    opPC();
});

opt_papel.addEventListener('click', function () {
    opcionJugador = "papel"
    opPC();
});

opt_tijera.addEventListener('click', function () {
    opcionJugador = "tijera"
    opPC();
});

