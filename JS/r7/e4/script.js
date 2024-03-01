function validarFormulario() {
    let campo1 = document.getElementById("campo1").value;
    let campo2 = document.getElementById("campo2").value;
    let codigoPostal = document.getElementById("codigoPostal").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;

    let camposValidos = campo1 != "" && campo2 != "" && codigoPostal != "" && dni != "" && email != "";
    let campo2Valido = typeof parseInt(campo2) == "integer";
    let emailValido = email.match(/^[^\s@]+@[^s@]+\.[^\s@]+$/);
    let dniValido = dni.match(/^\d{8}[a-zA-Z]{1}$/);

    let valido = camposValidos && campo2Valido && emailValido && dniValido;
    return valido;
}