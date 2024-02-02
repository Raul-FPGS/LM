function rectangulo(base, altura) {
    for (let i = 0; i < altura; i++) {
        if (i == 0 || i == altura - 1) {
            console.log("*".repeat(base));
        } else {
            console.log("*" + " ".repeat(base - 2) + "*");
        }
    }
}