//ForEach hace un recorrido del arreglo, 
//Si se quiere recorrer un arreglo para hacer una operacion sobre ella
//sin necesidad de regresar un arreglo o un valor especifico, se usa For Each
// EJERCICIO 1 CON CICLO TRADICIONAL

//crear un arreglo
let arreglo=[2,4,6,8,10,12];

//Recorrer el arreglo e indicar en qué posición se encuentra
for (let i = 0; i < arreglo.length; i++) {
    const item = arreglo[i];
    const index= i;

    console.log(item, index);
}
//Implementación con el método
//Pide un callback
arreglo.forEach((item,index)=>{
    console.log(item, index);
});

//OTRA FORMA
function myFunc(item, index){
    console.log(item,index);
}

arreglo.forEach(myFunc)