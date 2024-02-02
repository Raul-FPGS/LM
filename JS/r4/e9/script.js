let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function media() {
    let suma = 0;
    let media = 0;
    numeros.forEach(element => {
        suma += element;
    });

    media = suma / numeros.lenght;
    return media;
}