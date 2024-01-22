pisos = parseInt(prompt("Introduce el numero de pisos"));
caracter = "*";
for (let i = 1; i <= pisos; i++) {
    console.log(caracter);
    caracter += "*";
}