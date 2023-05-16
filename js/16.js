//DECLARACION DE FUNCION esta se puede llamr antes y luego la funcion pero se leera primero la funcion
//En el segundo botara error por que lo toma como una variable
sumar()
function sumar() {
    console.log(10 * 10);
}

sumar()

//Expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3 );
}
sumar2();

//IIFE
(function(){
    console.log('Esto es una funcion');
})();

//se puede llamar desde otro archivo crea un js con nombre otro y define el const cliente = 'Juan'; y lo podra llamar
//console.log(cliente);


