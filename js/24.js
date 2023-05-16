//For Loop
/* for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);    
    } else{
        console.log(`El numero ${i} es IMPAR`);    
    }
} */

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i])
    console.log(carrito[i].nombre)
    
}
 
//While Loop  Se ejecuta cuando se cumplela condicion

let i = 1; //Indice
while(i <= 100 ){ //Condicion
    if(i%2 === 0){
        console.log(`El numero ${i} es PAR`)
    } else{
        console.log(`El numero ${i} es IMPAR`)
    }

    i++; //Incremento
}

let j = 0; //Indice 
while(j < carrito.length ){ //Condicion
    console.log(carrito[j].nombre);
    j++; //Incremento
}

//Do While Loop Se ejecuta al menos una vez aunque la condicion no se cumpla
let k = 100;

do {
    console.log(k);
    k++;
} while(k < 10 );
