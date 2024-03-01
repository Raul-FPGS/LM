function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let direccion = document.getElementById("direccion").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let codidoPostal = document.getElementById("codigoPostal").value;
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;
    let condiciones = document.getElementById("condiciones").checked;
    let provincia = document.getElementById("provincia").value;
    let comentarios = document.getElementById("comentarios").value;
    let avisoLegal = document.getElementById("avisoLegal").checked;

    let emailValido = email.match(/^[^\s@]+@[^s@]+\.[^\s@]+$/);
    let valido = nombre != "" && direccion != "" && apellidos != "" && emailValido && telefono != "" && codidoPostal != "" && edad != "" && sexo != "" && condiciones && avisoLegal && provincia != "" && comentarios != "";
    return valido;
}