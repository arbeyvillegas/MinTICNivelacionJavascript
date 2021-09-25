// Sin destructing
const fruta = { nombre: 'mango', tipo: 'dulce' };

const nombre = fruta.nombre;
const tipo = fruta.tipo;

// Con  destructing
// const { nombre, tipo } = fruta;

console.log(`nombre: ${nombre}`);
console.log(`tipo: ${tipo}`);