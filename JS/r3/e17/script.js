function calificacion(nota) {
    let calificacion;
    if (nota < 5) { 
        calificacion = "Suspenso";
    } else if (nota < 6) {
        calificacion = "Aprobado";
    } else if (nota < 8) {
        calificacion = "Bien";
    }else if (nota < 9) {
        calificacion = "Notable";
    }else {
        calificacion = "Sobresaliente";
    }
}