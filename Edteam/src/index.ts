function activar (quien:string, objeto:string ="batiseña", momento?:string){

    let mensaje : string ;
    
    if(momento){
        mensaje = `${ quien } activo la  ${objeto} en al ${ momento }`
    }else{
        mensaje = `${quien} activo la ${objeto}`
    }

    console.log(mensaje);

}

activar("Gordon", "batiseñal", "tarde");
activar("Gordo");