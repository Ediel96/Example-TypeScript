class Avenger {
    nombre: string = "Antman";
    equipo: string | undefined;
    nombreReal: string| undefined;

    puedePelear: boolean = true;
    peleasGanadas: number = 0;

    constructor (nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman : Avenger = new Avenger("Antman","cap","Scott lang");

console.log(antman);