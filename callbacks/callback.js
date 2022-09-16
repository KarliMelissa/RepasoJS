/*PRIMER EJEMPLO */

function primero(){
    setTimeout(function(){
        console.log("Primero");
    }, 3000);
    
}
function segundo(){
    console.log("Segundo");
}
primero();
segundo();