const usuarioAutenticado = new Promise((resolve, reject)=>{
    const auth = false;
if (auth) {
    resolve('Usuario Auntenticado'); // El promise se cumple
}else{
    reject('No se pudo iniciar sesion'); // El prmise no se cumple
}
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

//En los Promises eexisten 3 valores
// Pending : NO se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected : Se ha rechazado o no se pudo cumplir