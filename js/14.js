// Arreglos

const numeros = [10,20,30,40,50];
console.table(numeros);

const meses = ['Enero','Febrero','Marzo', 'Abril','Mayo'];
console.table(meses);

const arreglo = ["Hola",10, true, "si", null, {nombre:"juan", trabajo: "Programador"}, [1,2,3]];

console.log(arreglo)

//Acceder a los valores d un arreglo
console.log(numeros[4]);
console.log(numeros[400]);
console.log(meses[4]);

// Conocer la extension de un arreglo
console.log(meses.length);

//Iterador foreach es como el for en otro lenguaje
numeros.forEach(function(numero){
    console.log(numero);
})




