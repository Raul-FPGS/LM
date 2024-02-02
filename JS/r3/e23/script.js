function contar_caracteres(cadena) {
    let contador= 0;
    let caracter = "a";
    let caracter2 = caracter.toUpperCase();
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == caracter || cadena[i] == caracter2) {
            contador++;
        }
        
    }
    return contador;
}