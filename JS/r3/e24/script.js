function contar_caracteres(cadena, caracter) {
    let contador= 0;
    let caracter1 = caracter.toLowerCase();
    let caracter2 = caracter.toUpperCase();
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == caracter1 || cadena[i] == caracter2) {
            contador++;
        }
        
    }
    return contador;
}