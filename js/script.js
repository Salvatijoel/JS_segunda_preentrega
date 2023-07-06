class FrutoSeco {
    constructor(frutoSeco) {
        this.id = frutoSeco.id;
        this.variedad = frutoSeco.variedad;
        this.precio = frutoSeco.precio;
        this.cantidad = 1;
        this.precioTotal = frutoSeco.precio;
    }

    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}

// Constantes y variables
const frutosSecos = [
    {
        id: 0,
        variedad: "Almendras",
        descripcion: "Almendras tostadas y saladas",
        precio: 600,
    },
    {
        id: 1,
        variedad: "Nueces",
        descripcion: "Nueces naturales",
        precio: 360,
    },
    {
        id: 2,
        variedad: "Maní",
        descripcion: "Maní tostado y salado",
        precio: 80,
    },
    {
        id: 3,
        variedad: "Avellanas",
        descripcion: "Avellanas sin cáscara",
        precio: 700,
    },
    {
        id: 4,
        variedad: "Pistachos",
        descripcion: "Pistachos sin cáscara",
        precio: 750,
    },
];

let carrito = [];
let precioTotal;

// ----- Declaración de funciones ----- //
function menuDeCompras() {
    let stringProductos = "";

    for (const frutoSeco of frutosSecos) {
        stringProductos += `${frutoSeco.id}: ${frutoSeco.variedad}. Precio: $${frutoSeco.precio} \n`;
    }

    let idProducto = prompt(`
Escriba el número del producto a comprar (100g), o escriba 'ESC' para finalizar 🌰
${stringProductos} \n`);

    while (idProducto !== "ESC") {
        let frutoSecoEnCarrito = carrito.find((elemento) => elemento.id == idProducto);

        if (frutoSecoEnCarrito) {
            let index = carrito.findIndex((elemento) => elemento.id === frutoSecoEnCarrito.id);

            carrito[index].agregarUnidad();
            carrito[index].actualizarPrecioTotal();

            alert(`
            Se ha añadido otra unidad de ${carrito[index].variedad} 🎉
            Unidades: ${carrito[index].cantidad}`);
            console.table(carrito);
        } else {
            carrito.push(new FrutoSeco(frutosSecos.find((elemento) => elemento.id == idProducto)));

            alert(`Se ha añadido al carrito el fruto seco ${frutosSecos.find((elemento) => elemento.id == idProducto).variedad} 🎉`);
            console.table(carrito);
        }

        idProducto = prompt(`
Desea seguir comprando? 🤔
Escriba el número del producto a comprar, o escriba 'ESC' para finalizar 🌰
${stringProductos}`);
    }
}

function obtenerPrecioTotal() {
    let total = carrito.reduce((total, elemento) => total + elemento.precioTotal, 0);
    return total;
}

// Invocación de funciones
menuDeCompras();
precioTotal = obtenerPrecioTotal();

alert(`El precio total de tu compra es de $${precioTotal}
Gracias! 😄`);
console.table(carrito);

// Método sort() aplicado a un array de objetos
// Ordenamos el array frutosSecos por precio de manera ascendente
frutosSecos.sort((a, b) => a.precio - b.precio);
console.log("Array ordenado por precio ascendente");
console.table(frutosSecos);

// Array ordenado por precio de manera descendente
frutosSecos.sort((a, b) => b.precio - a.precio);
console.log("Array ordenado por precio descendente");
console.table(frutosSecos);

// Método filter()
// Listamos los frutos secos con precio menor a $500
let nuevoArray = frutosSecos.filter((elemento) => elemento.precio < 500);
console.log("Nuevo array con precio menor a 500");
console.table(nuevoArray);
