let defecto = "desconocido";

let nombre = prompt("Introduce tu nombre", defecto);
if (nombre == null) {
    alert("Has pulsado cancelar");
} else if (nombre == '') {
    alert("Ese nombre esta vacio");
} else if (nombre != defecto) {
    alert("Hola " + nombre);
} else {
    alert("Desconocido te quedas");
}