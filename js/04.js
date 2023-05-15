// String o cadena de texto

const producto = 'MOnitor de 20"'; //Mas comun de usar
const producto2 = String('Monior 30 Pugadas');
const producto3 = new String('Monior 30 Pugadas');
const tweet = 'Aprendienco JavaScript con el curso de Desarrolllo Web';
//typeof es para saber que tipo de dato es una variable u objeto

console.log(producto);
console.log(typeof producto2);
console.log(producto3);

//Para contar caracteres
console.log(producto.length);
//indexOf(Retorna Paoisicon)
console.log(tweet.indexOf('JavaScrip'));
console.log(producto.indexOf('Tablet'));

//Includes (Retorna true o false)
console.log(tweet.includes('JavaScrip'));
console.log(producto.includes('Tablet'));