const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

//Forma Anterioor
//Entramos al Objeto y extraemos un dato
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto);

// Destructuring
const {precio, nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);