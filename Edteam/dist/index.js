"use strict";
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseña"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la  " + objeto + " en al " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batiseñal", "tarde");
activar("Gordo");
