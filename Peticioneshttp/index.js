//https://jsonplaceholder.typicode.com/users

function ShowData(datos) {
    //Apunta al contenedor
    let container =document.querySelector('.container')
    let {name, username, email, phone, address:{city}} = datos
    container.innerHTML += 
    `
    <div class="card">
                <div class="name">${name}</div>
                <div class="username">${username}</div>
                <div class="email">${email}</div>
                <div class="phone">${phone}</div>
                <div class="city">${city}</div>
            </div>
        </div>
    </div>
    `      
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