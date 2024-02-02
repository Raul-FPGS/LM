function esPalindromo(cadena) {
    if (cadena == cadena.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(esPalindromo("ana"));