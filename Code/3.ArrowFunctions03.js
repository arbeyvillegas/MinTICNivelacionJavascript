const imprimirFruta = (fruta) => {
  console.log('Imprimiendo fruta');
  console.log(fruta.nombre);
};

const controlarImpresionFrutas = (imprimir) => {
  const frutas = [
    { nombre: 'manzana', tipo: 'dulce' },
    { nombre: 'mango', tipo: 'dulce' },
    { nombre: 'papaya', tipo: 'dulce' },
    { nombre: 'naranja', tipo: 'citrico' },
    { nombre: 'uva', tipo: 'semiacido' },
  ];
  
  for (let fruta in frutas) {
    imprimir(frutas[fruta]);
  }
};

controlarImpresionFrutas(imprimirFruta);

// TAREA
// Crear un programa que sume los elementos de un array con puntos x, y.
// La aplicación debe tener 3 functiones arrow. Una que devuelva la suma, otra que imprima la suma y otra que controle el programa.