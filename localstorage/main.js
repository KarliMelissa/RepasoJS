// documento.addEventListener('click', ()=>{
//     localStorage.setItem('ValorRandom','linux')
// })

window.onload =()=>{

    let root = document.getElementById('root');
    let User = {nombre:'karla', edad:23}


    let documento = document.getElementById("tocame");
    documento.addEventListener('click', ()=>{
        localStorage.setItem('VALORRAMDON', '124345');
        localStorage.setItem('USER', User)
    });

    document.getElementById('Muestrame').addEventListener('click', ()=>{
        let datoslocales = localStorage.getItem('VALORRAMDON')
        root.innerHTML += `<p>${datoslocales}</p>`

        let datosUsuario = localStorage.getItem('USER');
        console.log('ESTOS SON LOS DATOS DEL USUARIO');
        console.log(datosUsuario);

    })

}
/**login sencillo utilizando localstorage y peticiones fecth api */

/**
 * username : username
 * password: email
 * y que esos datos los recoja del localstorage
 * si el usuariuo quiere cerrar la pagina
 * y que su sesion este activada
 * 
 * 
 * 
 */