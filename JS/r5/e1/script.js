let numero = parseInt(prompt("Introduce un numero"));

if (isNaN(numero)) {
    alert("No es un numero");
} else {
    if (numero % 2 == 0) {
        alert("Par");
    } else {
        alert("Impar");
    }
}
