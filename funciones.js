const lineasDeCodigo = [];
lineasDeCodigo.push
("console.log('Hola Mundo');",
"let a=3;",
"console.log(a+5);",
"console.log(2+3*4);",
"let b = 2;",
"console.log(b == 2);",
"console.log(false == 0);",
"let c = 'Hola mundo';",
"console.log('5'+5);",
"console.log(typeof Infinity);",
"console.log('5' - 1)",
"console.log(1 == 1);");

let listaprocesos = [];

function escogerLinea(){
    //numeros random para escoger lineas aleatorias
    let random = Math.floor(Math.random() * lineasDeCodigo.length);
    return lineasDeCodigo[random];
}

function inicializar(numDeProcesos){
    for(let i=1; i<=numDeProcesos; i++){
        let cadena=[];//cadena para almacenar lineas de codigo
        //numeros entre 1 y 7 lineas para cada proceso
        let numeroLineasDeProceso = Math.floor(Math.random() * (7 - 1) + 1);
        for(let j=0; j<numeroLineasDeProceso; j++){
            cadena.push(escogerLinea());
        }
        var proceso = new Object();
        proceso.num = i;
        proceso.linea = cadena;
        listaprocesos.push(proceso);
    }
    for(let a=0; a<listaprocesos.length; a++) //muestra todos los procesos con sus respectivas lineas
        console.log("PROCESO: " +listaprocesos[a].num + " - "+listaprocesos[a].linea);
}

function empezarSimulacion(numDeProcesos){
    inicializar(numDeProcesos);
    console.log("-------------------SIMULACION---------------------");
    let lineasTotales = 0;
    for(let j=0; j<numDeProcesos; j++){
        lineasTotales=lineasTotales+listaprocesos[j].linea.length;
    }//cuenta todas las lineas de todos los procesos

    while(lineasTotales!=0){//hasta que se acaben todas las lineas de codigo
        for(let a=0; a<numDeProcesos; a++){
            if(listaprocesos[a].linea != 0){
                //si aun hay lineas en un proceso, mostrara el primer elemento su lista de codigo
                console.log("PROCESO: "+listaprocesos[a].num);
                console.log(listaprocesos[a].linea[0]);
                listaprocesos[a].linea.shift();
                lineasTotales--;
            }else{ // si ya no hay lineas en el proceso significa que ya termino
                console.log("*************PROCESO: "+listaprocesos[a].num+" TERMINADO. **************");
            }
        }
    }
}
let valor = prompt("Numero de Procesos: ",0);
empezarSimulacion(valor);
