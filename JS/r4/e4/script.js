let notasAlumnos = [7.5, 6.8, 4.5];
let sumaNotas = 0;

notasAlumnos.forEach(element => {
    sumaNotas += element;
});

console.log(sumaNotas / notasAlumnos.length);