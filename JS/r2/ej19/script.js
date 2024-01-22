let producto = 1;
let limite = parseInt(prompt("Introduce un limite"));
for (let i = 1; i <= limite; i++) {
    producto *= i;
}
alert("La producto es: " + producto);