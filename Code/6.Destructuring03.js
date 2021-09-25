const fruta = { nombre: 'mango', tipo: 'dulce' };

const { nombre: nombreFruta, tipo: tipoFruta } = fruta;

const imprimirFruta = ({ nombre, tipo }) => {
  console.log(`nombre: ${nombre}`);
  console.log(`tipo: ${tipo}`);
};

imprimirFruta(fruta)
