const frutas = [
  { nombre: 'manzana', tipo: 'dulce' },
  { nombre: 'mango', tipo: 'dulce' },
  { nombre: 'papaya', tipo: 'dulce' },
  { nombre: 'naranja', tipo: 'citrico' },
  { nombre: 'uva', tipo: 'semiacido' },
];

const frutasDulces = frutas.filter((fruta) => fruta.tipo == 'dulce');

/* const frutasDulces = frutas.filter((fruta, indice, arreglo) => {
    console.log(indice);
    console.log(arreglo);
    return fruta.tipo == "dulce";
} ); */

console.log(frutasDulces);

// ACTIVIDAD
// 1. Retornar solo el nombre de las frutas dulces
// 2. Retornar los resultados de la suma que sean mayor o igual a 5.
