const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
]


const unico = personas.find(persona => persona.nombre === "Ana");
console.log(unico);


personas.forEach(persona => {
    console.log("Nombre" + persona.nombre+ " Edad: " + persona.edad);

});


const acomular = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
}, 0);
console.log(acomular);