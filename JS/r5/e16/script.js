let correo = prompt("Introduce tu correo");
let usuario = correo.slice(0, correo.indexOf("@"));
let dominio = correo.slice(correo.indexOf("@") + 1);
document.write("Tu usuario es: " + usuario);
document.write("Tu dominio es: " + dominio);