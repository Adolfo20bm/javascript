//Arrow Functions

const sumar2 = (n1,n2) => console.log(n1+n2);
sumar2(5,10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

//Usamos codigo de 15.js
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
meses.forEach(mes=>{
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;
//Some ideal para arreglo de objetos
resultado = carrito.some(producto=> producto.nombre === 'Celular PRO');
console.log(resultado);

//Reduce
resultado3 = carrito.reduce((total, producto)=>total + producto.precio,0);
console.log(resultado3);

// Filter
resultado4 = carrito.filter(producto=>producto.precio > 400);
console.log(resultado4);

resultado5 = carrito.filter(producto=>producto.nombre !== 'Celular');
console.log(resultado5);

