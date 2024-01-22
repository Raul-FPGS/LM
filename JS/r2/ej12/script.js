let factorial = parseInt(prompt("Introduce un numero y te hare el factorial"));
let suma = 1
for (let i = factorial; i > 0; i--) {
    suma *= i;
}

alert("El factorial es " + suma);