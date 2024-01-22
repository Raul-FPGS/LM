numero = parseInt(prompt("Introduce un numero"));
primo = true;
for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        primo = false;
        break;
    }
}
if (primo) {
    alert("Es primo");
} else {
    alert("No es primo");
}