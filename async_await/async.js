
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
CalcularCorazonesRotos(7).then((corazones)=>{
    let DivisionCorazon = 2;
    console.log(`El corazon esta dividido en ${corazones/DivisionCorazon}`);
}).catch((error)=>{
    let CorazonCompleto = 1;
    console.log('el corazon esta completo')
    console.log(error + CorazonCompleto);
})

// cls

// function ElAmorDeElla2() {
    
// }