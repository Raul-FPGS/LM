function verificador(cadena) {
    resulado = "Mezcla";
    if (cadena.toUpperCase() == cadena) {
        resultado = "Mayusculas"
    } else if (cadena.toLowerCase() == cadena) {
        resultado = "Minusculas"
    }
    return resultado;
} 