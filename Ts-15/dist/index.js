"use strict";
var MiFuncion1 = function (a) {
    return a;
};
var MiFuncion1F = function (a) { return a; };
var MiFuncion2 = function (a, b) {
    return a + b;
};
var MiFuncion2F = function (a, b) { return a + b; };
var MiFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var MiFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//----------------------//--------------------------------------------//--------------------------------------------------//
/*
let hulk1 = {
    nombre: "Bruce",
    smash(){
        console.log(this.nombre + " smash!! ");
    }
}
*/
var kulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 500);
    }
};
kulk.smash();
