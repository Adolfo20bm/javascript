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

// forEach 
carrito.forEach(producto=>console.log(producto.nombre));

// map

const arreglo2 = carrito.map( producto=>`${producto.nombre}-${producto.precio}`);
console.log(arreglo2);

//Para crear un nuevo arreglo con solo nombres uso map
//Pero si quiero mostar elementos solo uso foreach

//solo quiere iterar y mostrar en pantalla foreach
// si quieres crear un nuev arreglo puedes usar map