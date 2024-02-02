let articulos = [2, 5, 6, 3, 4];
let precios = [1.2, 3.4, 5.6, 7.8, 9.0];
let suma = 0;
for (let i = 0; i < articulos.length; i++) {
    suma += articulos[i] * precios[i];
}