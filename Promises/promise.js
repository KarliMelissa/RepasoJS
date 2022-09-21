//EJEMPLO 1
let x=10;

const p = new Promise((resolve, reject)=>{
    if(x==11){
        resolve("La variable es igual a 10");
    }else{
        reject("La variable no es igual a 10");
    }
});

p.then(res =>{
    console.log("success:" + res);
})
.catch(error =>{
    console.log("error:" + error);
});


//EJEMPLO 2 (PROMESAS CONSECUTIVAS)
let usuario = [{
    id: 1,
    nombre: "Karla"
},
{
    id: 2,
    nombre: "Melissa"
}];

let telefonos = [{
    id: 1,
    telefono: 123456
},
{
    id: 2,
    telefono: 234507
}];

//Funcion que obtenga el usuario
const obtenerUsuario=id=>{
    //Retorna un objeto de tipo promise
    return new Promise((resolve, reject)=>{
        if(usuario.find(usuario => usuario.id === id)){
            resolve("El usuario existe")
        }else{
            reject("El usuario no existe")
        }
    });
};

const obtenerTelefono=id=>{
    //Retorna un objeto de tipo promise
    return new Promise((resolve, reject)=>{
        if(telefonos.find(telefono => telefono.id === id)){
            resolve("El telefono existe")
        }else{
            reject("El telefono no existe")
        }
    });
};

obtenerUsuario(1)
.then(res =>{
    console.log(res)
})
.catch(error=>{
    console.log(error);
})