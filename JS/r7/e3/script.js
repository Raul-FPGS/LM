function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value;
    let fecha = document.getElementById("fecha").value;
    let seleccion = document.getElementById("seleccion").value;

    let validoNombre = typeof nombre == "string";
    let validoEdad = typeof edad == "integer";
    let validoEmail = email.match(/^[^\s@]+@[^s@]+\.[^\s@]+$/);
    let validoFecha = fecha.match(/^\d{2}\/\d{2}\/\d{4}$/);
    let validoDesplegable = seleccion != "defecto";

    let valido = validoNombre && validoEdad && validoEmail && validoFecha && validoDesplegable;
    return valido;
}