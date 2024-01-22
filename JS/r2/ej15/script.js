let longitud = parseInt(prompt("Introduce la longitud"));
let caracter = prompt("Introduce el caracter");
let linea = "";

for (let i = 0; i < longitud; i++) {
    linea += caracter;
}
alert(linea);