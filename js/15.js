//Array Methods
const meses = ['Enero','Febrero','Marzo', 'Abril','Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisor 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

//Comprobando si un elemento existe o no

//forEach
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes trabaja bien en arerglos palnos l lineales, ya con objetos no se aplica
let resultado = meses.includes('Marzo');

//Some ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular PRO'
});
console.log(resultado);

//Forma corta de SOME
resultado2 = carrito.some(producto => producto.nombre === 'Laptop');
console.log(resultado2);

//Reduce
resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio
},0);
console.log(resultado3);

// Filter
resultado4 = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado5 = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});
console.log(resultado5);


