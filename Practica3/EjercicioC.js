
function simularOeticionAPI() {// En la siguiente linea cree la función simularOeticionAPI
    return new Promise((resolve) => {// En esta linea cree una promesan 
        setTimeout(() => {// En esta linea se ejecuta el setTimeout que sirve para simular la espera de la API
            resolve("Datos obtenidos de la API");// En esta linea se ejecuta el resolve para indicar que la promesa se cumplio
        }, 5000);// Y aqui se indica el tiempo de espera que son  los 5 segundos
    });
}



async function obtenerDatos() {// En esta linea cree la función de obtenerDatos
    try {// En esta linea inicie el try 
        const datos = await simularOeticionAPI();// En esta linea llame a la función simularOeticionAPI con el await para esperar a que se cumpla la promesa
        console.log(datos);// En esta linea imprimo el resultado de la promesa
    } catch (error) {// En esta linea inicie el catch
        console.error("Error al obtener los datos:", error);// En esta linea imprimo el error en caso de que no se cumpla la promesa
    }
}
obtenerDatos();// En esta linea llame a la función obtenerDatos