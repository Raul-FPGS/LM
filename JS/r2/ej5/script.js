let notas = 0.0;
let suma = 0.0;
let recuperar = false;

for (let i = 1; i <= 3; i++) {
    notas = parseFloat(prompt("Introduce tu nota: "))
    if (notas < 5) {
        alert("Tienes que presentar la recuperacion de la evaluacion " + i);
        recuperar = true;
        continue;
    }

    suma += notas;
}

if (!recuperar) {
    let media = suma / 3;
    alert("La media es: " + media); 
}