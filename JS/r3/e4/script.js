function piramide(altura) {
    for (let i = 0; i < altura; i++) {
        console.log(" ".repeat(altura-i) + "*".repeat((i * 2) + 1));
    }
}

piramide(5)