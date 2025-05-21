const persona = {
    nombre: "María José",
    edad: 24,
    dieccion: {
        ciudad: "Qro",
        pais: "MX"

    }
}


const persona2 = {nombre, edad, dieccion: {ciudad, pais} } = persona;
console.log("Me llamo " + nombre + " tengo " + edad + " años y vivo en " + ciudad + ", " + pais);
