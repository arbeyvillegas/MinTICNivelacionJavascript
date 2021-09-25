let imprimirFruta = function (fruta) {
  console.log('Imprimiendo fruta');
  console.log(fruta.nombre);
};

let controlarImpresionFrutas = function (imprimir) {
  let frutas = [
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