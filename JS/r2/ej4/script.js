let nota = parseFloat(prompt("Introduce tu nota"));

if (nota < 5) { 
    alert("Suspenso")
} else if (nota < 6) {
    alert("Aprobado")
} else if (nota < 8) {
    alert("Bien")
}else if (nota < 9) {
    alert("Notable")
}else {
    alert("Sobresaliente")
}