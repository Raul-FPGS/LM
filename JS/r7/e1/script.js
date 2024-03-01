function validarJugadores() {
    let jugador1 = document.getElementById("jugador1").value;
    let jugador2 = document.getElementById("jugador2").value;
    let jugador3 = document.getElementById("jugador3").value;
    
    let valido = jugador != "" && jugador2 != "" && jugador3 != "";
    
    return valido;
}