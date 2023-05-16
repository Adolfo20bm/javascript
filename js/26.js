// This


//Este objeto tiene una funcion
const reservacion = {
    nombre: 'Adolfo',
    apellido: 'Morales',
    total: 5000,
    pagado: false,
    //this hace referecnai al objeto sobre el cual se esta mandanao llamar esta funbcion
    //this hace referecnai al mismo objeto que se esta llamando sobre esta funcion para no estar llamando al mismo nombre de la variable reservacion

    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Adolfo2',
    apellido: 'Morales',
    total: 5000,
    pagado: false,
    //this hace referecnai al objeto sobre el cual se esta mandanao llamar esta funbcion
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();

//Para un trabajo vendria
//window.nombre = 'Un Nombre'
const reservacion3 = {
    nombre: 'Adolfo',
    informacion: () => {
        console.log(`${this.nombre}`);
    }
}
reservacion3.informacion();
