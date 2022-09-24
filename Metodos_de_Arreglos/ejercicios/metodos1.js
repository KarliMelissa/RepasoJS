/**dentro de un array existen 7 bebidas energeticas */
/**yo quiero solamente ver la bebida que este al inicio 
 * y la que este al final
 */

let Bebidas = ['Gatorade', 'Cerveza', '220', 'ponimalta', 'switch', 'bolcan', 'sporade'];

console.log(Bebidas.length);

let FiltroBebidas= Bebidas.slice(0,1);
let FiltroBebidas1 = Bebidas.splice(Bebidas.length-1);

let matches = []
matches.push(...FiltroBebidas)
matches.push(...FiltroBebidas1)

console.log(matches);