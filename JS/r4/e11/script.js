let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function primos(valor) {
    let esPrimo = true;
    for (let i = 2; i < Math.sqrt(element); i++) {
        if (element % i == 0) {
            esPrimo = false;
            break;
        }
    }
    return esPrimo;
}

numeros.forEach(element => {
    console.log(primos(element) ? element : " ");
});