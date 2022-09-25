//https://jsonplaceholder.typicode.com/users

function ShowData(datos) {
    let Contenido = document.getElementById('root');
    let {name, username, email} = datos
    Contenido.innerHTML += `<ul>
                                    <li>${name}</li>
                                    <li>${username}</li>
                                    <li>${email}</li>
                                </ul>`      
}

async function GetData() {
    
    let URI_FREE = "https://jsonplaceholder.typicode.com/users"

    let DatatoJson = await fetch(URI_FREE);
    let AllData = await DatatoJson.json();
    
    AllData.forEach(ShowData)

    // Contenido.innerHTML += `<p>Hola</p>` 

}

/**Ejercicio peticion fecth api */

/**generar una carta por cada dato de la api que contenga los siguientes datos */

/**
 * Ciudad (city)
 * Telefono (phone)
 * Nombre de la compañia en la que trabaja Company (name)
 * Nombre (name)
 * Correo (email)
 * Usuario (username)
 */