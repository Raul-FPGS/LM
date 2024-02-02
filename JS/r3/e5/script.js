function piramide(altura, relleno) {
    for (let i = 0; i < altura; i++) {
        console.log(" ".repeat(altura-i) + relleno.repeat((i * 2) + 1));
    }
}

piramide(5, "#")