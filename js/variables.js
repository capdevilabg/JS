

function Jugador(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;

}

function PedirDatos(cantidad) {
    let niveles = 0 //declaro niveles como un acumulador para despues sacar el promedio 
    let jugadores = {};//esto es un objeto con objetos adentro cuando corra el for 

    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt("Cual es su nombre?");//pide nnombre
        let nivel = parseInt(prompt("Cual es su nivel ?"));//pide nivel 

        jugadores[i] = new Jugador(nombre, nivel);//personas en la posicion [i] (al principio es posicion 0 y va incrementando con el for)
        niveles += jugadores[i].nivel; //aca suma el nivel del objeto creado a "niveles"

    }


   alert("El promedio de nivel es de " + niveles / cantidad); // aca muestro la lista de personas , y el promedio de nivel 
}

PedirDatos(3);// aca llamo a pedirdatos 3 veces 









