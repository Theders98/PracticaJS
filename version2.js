class Carrito {

    constructor(fecha, numero) {
        this.fecha = fecha;
        this.numero = numero;
        this.articulos = [];
    }

    ponArticulo(articulo) {
        // Si el artículo no estaba, lo añadimos. Si no, solo aumentamos las unidades.
        let articuloPresente = this.articulos.find(a => a.codigo == articulo.codigo);
        console.log(articuloPresente);

        if (articuloPresente == null) {
            this.articulos.push(articulo);
        } else {
            articuloPresente.unidades = parseInt(articuloPresente.unidades) + 1;
        }
    }

    verArticulos() {
        let total = 0;
        let html = `            <table>
            <tr>
            <th>Codigo</th><th>Descripción</th><th>Precio</th><th>Unidades</th>
            </tr>
        `
        `
            this.products.forEach(function (product) {
            <tr>
            <td>${product.codigo}</td>
            <td> ${product.descripcion}</td>
            <td>${product.precio}</td>
            <td>${product.unidades}</td>
            ${ total += product.precio * product.unidad}
        </tr>
            })
            }
            <h3>Total ${total}</h3>

            `
        document.getElementById("listaCarrito").appendChild(html)
    }
}



//--------------------------------------Objeto Articulo ---------------------------------------------
class Articulo {
    constructor(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.unidades = 1;
    }
}


//--------------------- Funciones para asociar al hacer click en las fotos y al hacer click en 'Ver Carrito'
window.onload = function () {
    // Crear carrito
    micarrito = new Carrito("18/11/2019", "1234");

    // Asignar listeners a las imágenes
    imagenes = document.getElementsByTagName("img");
    Array.from(imagenes).map(img => img.addEventListener("click", articulo_nuevo));

    // Asignar acción a "Ver carrito" (con onclick, por variar)
    document.getElementById("boton").onclick = micarrito.verArticulos;
}


function articulo_nuevo(evento) {
    // Obtenemos array con datos de la imagen clickada
    let datos = evento.srcElement.name.split("|");

    let codigo = datos[0];
    let descripcion = datos[1];
    let precio = datos[2];

    // Creamos objeto artículo con los datos obtenidos
    let nuevoArticulo = new Articulo(codigo, descripcion, precio);

    // Lo añadimos al carrito
    micarrito.ponArticulo(nuevoArticulo);
}