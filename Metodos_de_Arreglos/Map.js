//Similar a ForEach, con la diferencia de que
//si regresa un nuevo arreglo
//Map hace una operacion en cada interaccion de un arreglo
//y esa operacion la almacena como un nuevo elemento del arreglo
//y al final se devuelve un arreglo diferente sin modificar el original

//crear un arreglo
let arr=['juan', 'marcos', 'lena', 'sergio'];

let resul=[];
for (let index = 0; index < arr.length; index++) {
    const item = arr[index];

    resul.push(`<div>${item}</div>`);
    
}
console.log(resul);

//Aplicando método de Map

//declarar una variable
let resul2=arr.map((item, indez)=>{
    return `<div>${item}</div>`
});
console.log(resul2);
console.log(arr);