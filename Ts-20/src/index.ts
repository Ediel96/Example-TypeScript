interface Xmen{
    nombre: string;
    poder: string;
};


function enviarMision (xmen : Xmen){
    console.log("Enviar a: "+ xmen.nombre + "a la mision");
};

function enviarCuartel(xmen : Xmen){
    console.log("Enviando al cuartel: " + xmen.nombre);
};

let wolverine: Xmen = {
    nombre: "Wolverine",
    poder: "Regeneracion"
}

enviarMision(wolverine);
enviarCuartel(wolverine);