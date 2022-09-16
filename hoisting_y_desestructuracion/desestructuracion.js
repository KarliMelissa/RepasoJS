/* Desestructuracion de arreglos */
//Sin desestructurar
const numeros =[1,2,3];

let uno=numeros[0];
    dos=numeros[1];
    tres=numeros[2];

console.log(uno, dos, tres);

//Con desestructuracion
const[one,two,three]=numeros;
console.log(one,two,three);

/**SEGUNDO EJEMPLOOOOO */
//Sin desestructurar
const numbers=[1,2,3,4];
const valor1=numbers[0];
const valor2=numbers[1];
const valor3=numbers[2];
const valor4=numbers[3];
console.log(valor1,valor2,valor3,valor4);

//Con desestructuracion
const [, valors2, valors3, valors4]=numbers;
console.log(valor2,valor3,valor4);


/* Desestructuracion de objetos */
//Sin desestructurar
const persona={
    nombre:"Karla",
    edad:23
}

//Con desestructuracion
let{nombre,edad}=persona;
console.log(nombre,edad);


/**SEGUNDO EJEMPLOOOOO */
//Sin desestructurar
const item={
    id:0,
    title: "Hola Mundo",
    completed:false
}

//Con desestructuracion
let{id,title,completed}= item
console.log(id, title, completed);