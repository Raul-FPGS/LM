function validarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let interes = document.getElementById("interes").value;

    let valido = nombre != "" && edad >= 18 && interes != "elegir";
    return valido;
}