let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = prompt("Introduce tu DNI");
let numeros = parseInt(dni.substring(0,9));
let letra = dni.charAt(8);

if (numeros > 0 && numeros < 999999999) {
    let calculoLetra = numeros % 23;
    if (letras[calculoLetra] == letra) {
        alert("DNI correcto");
    } else {
        alert("Letra invalida");
    }
} else {
    alert("Numero no valido");
}