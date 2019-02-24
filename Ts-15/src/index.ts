
let MiFuncion1 = function ( a:any ){
 return a;
}

let MiFuncion1F = (a :any) => a;


let MiFuncion2  = function(a:number, b:number){
    return a + b;
}

let MiFuncion2F = (a:number, b:number) => a + b;

let  MiFuncion3 = function (nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let  MiFuncion3F = (nombre:string) =>{
    nombre = nombre.toUpperCase();
    return nombre;
}

//----------------------//--------------------------------------------//--------------------------------------------------//
/*
let hulk1 = {
    nombre: "Bruce",
    smash(){
        console.log(this.nombre + " smash!! ");
    }
}
*/

let kulk = {
    nombre : "Hulk",
    smash(){
        setTimeout( () => console.log(this.nombre + " smash!!") , 500 )
    }
}

kulk.smash();