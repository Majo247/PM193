const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
]



const paso1 = productos.filter(producto => producto.precio >= 1000);

const nombres = paso1.map(filtrar => filtrar.nombre);
console.log(nombres);