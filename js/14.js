// Arreglos
const numeros = [10,20,30,40,50];
console.table(numeros);

const arreglo = ["Hola",10, true, "si", null, {nombre:"juan", trabajo: "Programador"}, [1,2,3]];

console.log(arreglo)

//Acceder a los valores d un arreglo
//console.log(numeros[4]);
//console.log(numeros[400]);
//console.log(meses[4]);

// Conocer la extension de un arreglo
//console.log(meses.length);

//Iterador foreach es como el for en otro lenguaje
//numeros.forEach(function(numero){
//    console.log(numero);
//})

//Agregar elementos
numeros[5] = 60;
numeros[6] = 70;

//Agregar elementos ssin saber la posisicion
numeros.push(80,90,100); // Agregar al final del arreglo
numeros.unshift(-10,-20,-30) //Agregar al inicio del arreglo
console.table(numeros);


const meses = ['Enero','Febrero','Marzo', 'Abril','Mayo'];
//meses.pop();//elimina el ultimo eleemento
//meses.shift(); //elimina el primner eleemento

//meses.splice(2,1)
//console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'junio'];
const nuevoArreglo2 = ['diciembre',...meses];
console.log(nuevoArreglo);
console.log(nuevoArreglo2);



