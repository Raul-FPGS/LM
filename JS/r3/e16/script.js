function notas() {
    let aprobados, suspensos, media;
    let notas = prompt("Notas: ").split(", ");
    notas.forEach(nota => {
        if (element >= 5) {
            aprobados++;
        } else {
            suspensos++;
        }
        media += nota
    });
    media = media / notas.length;
    return aprobados, suspensos, media;
}