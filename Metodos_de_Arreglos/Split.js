//

//necesitamos que cada una de las palabras sea un elemento de un array
let string="Hola gente como les va"

let stringPasadoAArray= string.split(" ")

console.log(stringPasadoAArray);

/**separar o cambiar una letra en especifico de una cadena string*/

/**esta es la forma largaaaaa */
let cadena =  'El niño ñoño'

let nuevoarray = cadena.split("");

function Macth(item) {
    if (item != 'ñ') {
        return item
    }
    return item = 'n'  
}

let nuevoarreglo = nuevoarray.map(Math);

let cadenanueva = nuevoarreglo.join("")
console.log(cadenanueva);

/**aqui termina la forma larga */

/**esta es la forma corta*/
/**rgex */
let cadenaremplazada = cadena.replace(/ñ/g, 'n')
console.log(cadenaremplazada);


// let macthes = nuevoarray.filter(a=> a === 'ñ');

// console.log(macthes);

// let nuevacadena= .replace('ñ', 'n');

// let nuevacadena = cadena.replace('ñ', 'n');

// console.log(nuevacadena);

/**Spplit 
 * podemos separar cada una de las palabras y las pone en un elemento de un array
 */

/**replace
 * remplaza un caracter por otro en una cadena de texto
 */

/**join
 * unir un array a string mediante un seperados example join("")
 */

/**map
 * recorre un array pero se le pueden realizar iteraciones dentro
 * y a su vez devuelve un nuevo sin modificar el principal 
 */