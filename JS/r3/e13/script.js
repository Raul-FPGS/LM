function primos_rango(inicio, final) {
    for (let i = inicio; i <= final; i++) {
        if (es_primo(i)) {
            console.log(i);
        }
    }
}

function es_primo(numero) {
    let resultado = true;
    for (let i = 2; i < Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            resultado = false;
        }
    }
    return resultado
}