
const ElAmorDeElla =(valor)=>{
    return new Promise((resolve, reject)=>{
        if (2>valor) {
            resolve('la condicion es correcta')
        }else{
            reject('la condicion no es correcta...')
        }
    })
}

ElAmorDeElla(5)
    .then(resultado=> console.log(resultado))
    .catch(error=> console.log(error))


const CalcularCorazonesRotos =(Veces)=>{
    return new Promise((resolve, reject)=>{
        if (Veces > 5) {
            resolve(Veces)
        }else{
            reject(0)
        }
    })
}    
/**Donde se pasan corazones si es then pasan las veces que te partieron el corazon */
// CalcularCorazonesRotos(7).then((corazones)=>{
//     let DivisionCorazon = 2;
//     console.log(`El corazon esta dividido en ${corazones/DivisionCorazon}`);
// }).catch((error)=>{
//     let CorazonCompleto = 1;
//     console.log('el corazon esta completo')
//     console.log(error + CorazonCompleto);
// })


// cls

const CuritasCorazones=()=>{
    return new Promise((resolve, reject)=>{
        if (true) {
            return resolve(10)
        }
    })
}

async function ElAmorDeElla2() {

    try {
        let PedasosDeCorazon = await CalcularCorazonesRotos(2);
        let CuritasDeCorazon = await CuritasCorazones();
        console.log(PedasosDeCorazon + CuritasDeCorazon);
    } catch (error) {
        console.log(error)
    }
}

function Data() {
    console.log('Hola');
}
Data();

ElAmorDeElla2();


/**Crear dos promesas 
 * la primera que te devuelva un objeto con los datos de un estudiante si
 * la suma de las calificaciones es mayor a 7
 * Crear una promesa que en base al paralelo del estudiante te devuelva de excelencia 
 * si este pertenece al paralelo A y que tre devuelva normal si su paralelo es diferente
 * y trabajarlo con async await
 */

/**Creacion de objeto */
/**Desestructuracion */
/**Promesas y async await */





/*const SumaCalificaciones=()=>{
    return new Promise((resolve, reject)=>{
        let sum = 0;
           for (let i = 0; i > calificaciones.length; i++) {
            sum += calificaciones[i];
           }
    })
}*/

let Estudiante = {
    nombre:'karla',
    apellido:'Sanchez',
    paralelo:'A',
    calificaciones:[1,1, 1]
}

// let {calificaciones} = Estudiante

const datosEstudiante=(Estudiante)=>{
    //let {nombre, apellido, paralelo, calificaciones}=Estudiante
    let {calificaciones} = Estudiante
    return new Promise((resolve, reject)=>{
        let sum = 0;
           for (let i = 0; i < calificaciones.length; i++) {
            sum += calificaciones[i];
           }

        if( sum > 7){
            resolve (Estudiante)
        }else{
            reject("No hay datos de estudiante")
        }
    })
}
// datosEstudiante(Estudiante).then(res=>{
//     console.log(res);
// }).catch(error=> console.log(error))

const ParaleloEstudiante=(paralelo)=>{
    return new Promise((resolve, reject)=>{
        if (paralelo === "A") {
            resolve("Excelencia")
        }else{
            reject ("normal")
        }
    })
}

async function DevolverDatosEstudiante(Estudiante) {

    try {
        let datos = await datosEstudiante(Estudiante);
        let{paralelo}=datos
        console.log(datos);
        let paralel = await ParaleloEstudiante(paralelo);
        console.log(paralel);
        //console.log(nombre, apellido, paralelo, calificaciones);
    } catch (error) {
        console.log(error)
    }
}
DevolverDatosEstudiante(Estudiante)
console.log('prueba cambio');

/*Crear una promesa que en base al paralelo del estudiante te devuelva de excelencia 
 * si este pertenece al paralelo A y que tre devuelva normal si su paralelo es diferente
 * y trabajarlo con async await*/







