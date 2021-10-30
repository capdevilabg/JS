

let cantidadParticipantes = parseInt(prompt("Cuantos participantes van a jugar?"))


function saludar(nombre) {
    alert("Hola " + nombre);
}

function pedirNombre(cantidad, mensaje) {
    for (let i = 1; i < cantidad; i++) {
        let nombre = prompt(mensaje);
        saludar(nombre + " usted es el participante numero " + i);
    }
}

function random(min, max) {
    alert("Quien comienza el juego es el participante numero : " + (Math.floor((Math.random() * (max - min + 1)) + min)));
}




pedirNombre((cantidadParticipantes + 1), "Cual es su nombre?");
random(1, cantidadParticipantes);


