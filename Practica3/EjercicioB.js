

function verificarUsuario(usuario) {// Mn esta linea cree la función verificarUsuario
   return new Promise((resolve, reject) => {//En  esta linea cree una promesa, por la cual se ejecuta el resolve o el reject
              if (usuario === "admin") {//En esta linea verifique si el usuario es admin (===)
                resolve("Usuario verificado");//En esta linea se ejecuta el resolve
              } else {
                reject("Usuario no verificado");//En esta linea se ejecuta el reject para el caso de que el usuario no sea admin
              }
         
   }); 
}

verificarUsuario("admin")//En la siguiente linea llame a la función verificarUsuario
  .then((res ) => console.log(res))//En esta linea imprimo el resultado de la promesa
  .catch((error) => console.error(error));//Mientras que en esta linea imprimo el error en caso de que no se cumpla la promesa

  verificarUsuario("Majo")//En esta linea llame a la función verificarUsuario
    .then((res ) => console.log(res))//En esta linea imprimo el resultado de la promesa
    .catch((error) => console.error(error));//En esta linea imprimo el error en caso de que no se cumpla la promesa

