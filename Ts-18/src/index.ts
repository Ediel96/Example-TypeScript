let prom1 = new Promise(function(resolve: any, reject: any){
    setTimeout(()=>{
        console.log("promesa terminada");

        resolve();

    }, 1500)
})

prom1.then(function(){
    console.log("Ejecutarme cuando se termine  bie!");
},
    function(){
        console.error("Ejecutar si todo sale mal")
    }
)