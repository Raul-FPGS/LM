function factorial(numero) {
    let suma = numero;
    for (let i = numero - 1; i > 0; i--) {
        suma *= i;
    }
    return suma;
}

console.log(factorial(5)) 