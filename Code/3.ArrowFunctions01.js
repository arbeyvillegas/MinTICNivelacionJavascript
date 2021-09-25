// Esta es la forma normal de nombrar una funcion en javascript

function imprimirFruta(fruta) {
  console.log("Imprimiendo fruta");
  console.log(fruta.nombre);
}

function controlarImpresionFrutas() {
    let frutas = [
        { nombre: 'manzana', tipo: 'dulce' },
        { nombre: 'mango', tipo: 'dulce' },
        { nombre: 'papaya', tipo: 'dulce' },
        { nombre: 'naranja', tipo: 'citrico' },
        { nombre: 'uva', tipo: 'semiacido' },
      ];
    for(let fruta in frutas) {
      imprimirFruta(frutas[fruta]);
    }
};

controlarImpresionFrutas();