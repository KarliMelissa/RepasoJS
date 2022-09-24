//Selecciona elementos, tiene dos argumentos (comienzo, termino)

//declaramos un array
const nombres=['Ana', 'Javier', 'Mary', 'Luis', 'andrea', 'karen', 'emmely']

//declaramos otra variable
//y solo quiero los nombres de Ana y Javier
//Slice, no toma en cuenta la segunda posición por lo que se
//debe poner la siguiente para tomar el segundo nombre 0 y 2

const nombres2=nombres.slice(3, 5);

//Ahora si quiero imprimir los nombres Mary y Luis, las 
//posiciones que debo poner son 2 y 4
//const nombres2=nombres.slice(2,4);
console.log(nombres2);
