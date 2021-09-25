const frutas = [
  { nombre: 'manzana', tipo: 'dulce' },
  { nombre: 'mango', tipo: 'dulce' },
  { nombre: 'papaya', tipo: 'dulce' },
  { nombre: 'naranja', tipo: 'citrico' },
  { nombre: 'uva', tipo: 'semiacido' },
];

const nombreFrutas = frutas.map((fruta) => fruta.nombre);

console.log(nombreFrutas);


// ACTIVIDAD
// Crear un programa que sume los elementos de un array con puntos x, y e imprima el arreglo resultante.
// Vamos a modificar el programa de la actividad anterior pero usando map.