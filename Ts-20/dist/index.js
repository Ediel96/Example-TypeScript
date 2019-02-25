"use strict";
;
function enviarMision(xmen) {
    console.log("Enviar a: " + xmen.nombre + "a la mision");
}
;
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
;
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
