function linea(caracter, veces) {
    console.log(caracter.repeat(veces))
}

function piramide(altura, relleno) {
    for (let i = 0; i < altura; i++) {
        console.log(linea(caracter, altura - i) + linea(relleno, (i * 2) + 1));
    }
}

piramide(5, "#")
