const fruta = { nombre: 'mango', tipo: 'dulce' };

// Con  destructing
const { nombre: nombreFruta, tipo: tipoFruta } = fruta;

console.log(`nombre: ${nombreFruta}`);
console.log(`tipo: ${tipoFruta}`);