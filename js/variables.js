/* const usuario = prompt("Ingresa su  usuario");
const contrasenia = prompt("Ingrese su contraseña");

const adminValido = ((usuario == "admin") && (contrasenia == "admin"));
const usuarioValido = (usuario.toLowerCase() == "pedro" && contrasenia == "pedro123") || (usuario.toLowerCase() == "carlos" && contrasenia == "carlos123") || (usuario.toLowerCase() == "simon" && contrasenia == "simon123");




if (adminValido) {
    console.log("Bienvenido Admin ");
} else if (usuarioValido) {
    console.log("Bienvenido " + usuario.toLowerCase());
} else {
    alert("Usuario invalido , refresque la pagina y vuelva a intentarlo")

}
 */


/* ------------------------------------------------------------------------------------ */




let color = "";
do {
    color = prompt("Adivina de que color sera el Titulo2")
} while (color.toLowerCase() != "azul")
alert("Felicidades , el Titulo 2 es azul!")



for (let i = 1; i < 6; i++) {
    document.write("<h" + i + ">" + "Titulo" + i + "</h" + i + ">");

}
