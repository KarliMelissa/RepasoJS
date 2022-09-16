/**Funciones que se llaman a si mismo */
/**Un callback practicamente es una funcion que se llama dentro de otra funcion*/

function AmigosDeKarla(Amigo) {
    console.log(Amigo)
}

function CalcularEdad(AmigosDeKarla,Nombre, Edad) {

    let Miamigo = {
        nombre:"Juan",
        edad:23
    }
    console.log("Nombre: " + Nombre + Edad + "  :edad");
    AmigosDeKarla(Miamigo)
}

CalcularEdad(AmigosDeKarla,"Karla", 23)


/**Callback con arrow function*/