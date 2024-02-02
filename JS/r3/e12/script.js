function es_primo(numero) {
    let resultado = true;
    for (let i = 2; i < Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            resultado = false;
        }
    }
    return resultado
}