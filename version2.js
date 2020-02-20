class Carrito {
    constructor(fecha, numero) {
        this.fecha = fecha;
        this.numero = numero;
        this.articulos = [];
    }

    ponArticulo(evento) {
        console.log(evento)
        let datos = evento.name.split("|");

        let nuevoArticulo = new Articulo(datos[0], datos[1], datos[2]);


        let articuloPresente = this.articulos.find(a => a.codigo == nuevoArticulo.codigo);
        console.log(articuloPresente);

        if (articuloPresente == null) {
            this.articulos.push(nuevoArticulo);
        } else {
            articuloPresente.unidades = parseInt(articuloPresente.unidades) + 1;
        }

    }

    verArticulos() {
        let capa = document.getElementById("listaCarrito");

        let total = 0;

        let html = "";

        html += "<table>";
        html += "<tr>";
        html += "<th>Codigo</th><th>Descripción</th><th>Precio</th><th>Unidades</th>";
        html += "</tr>";

        micarrito.articulos.forEach(function(art) {
            html += "<tr>";
            html += "<td>" + art.codigo + "</td>";
            html += "<td>" + art.descripcion + "</td>";
            html += "<td>" + art.precio + "</td>";
            html += "<td>" + art.unidades + "</td>";
            html += "</tr>";
            total += parseInt(art.precio) * parseInt(art.unidades);
        });

        html += "<h3>Total: " + total + "€</h3>";

        html += "</table>";
        capa.innerHTML = html;
    }
}



class Articulo {
    constructor(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.unidades = 1;
    }
}


window.onload = function() {

    micarrito = new Carrito("18/11/2019", "1234");

    imagenes = document.getElementsByTagName("img");
    Array.from(imagenes).map(img => img.addEventListener("click", function() {
        micarrito.ponArticulo(this)
    }));

    document.getElementById("boton").onclick = micarrito.verArticulos;
}