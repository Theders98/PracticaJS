//--------------------------------------Objeto Carrito ---------------------------------------------
window.onload = function(){
class Cart {
    constructor(date, number) {
        this.date = date;
        this.number = number;
        this.products = new Array();
    }

    addProduct(event) {
        let data = event.srcElement.name.split("|");

        let product = new Product(data[0], data[1], data[2])

        let selectedProduct = this.products.find(p => p.id == product.id)

        if (selectedProduct) { this.products.push(product) }
        else { selectedProduct.quantity++ }

    }

    printCart() {
        console.log(this.products)
        let total = 0;
        let html = `            <table>
            <tr>
            <th>Codigo</th><th>Descripción</th><th>Precio</th><th>Unidades</th>
            </tr>
        
            ${this.products.forEach(function (product) {
            `<tr>
            <td>${product.codigo}</td>
            <td> ${product.descripcion}</td>
            <td>${product.precio}</td>
            <td>${product.unidades}</td>
            ${ total += product.precio * product.unidad}
        </tr>`
        })
            }
            <h3>Total ${total}</h3>

            `
        document.getElementById("listaCarrito").appendChild(html)
    }
}

		//--------------------------------------Objeto Articulo ---------------------------------------------

    class Product {

        constructor(codigo,	descripción, precio){
            this.codigo = codigo
            this.descripción = descripción
            this.precio = precio
            this.unidades = 1
        }

    }

		//--------------------- Funciones para asociar al hacer click en las fotos y al hacer click en 'Ver Carrito'



            let cart = new Cart("24/07/2020", 1)
            console.log(cart)
            let imagenes = document.getElementsByTagName("img")

            Array.from(imagenes).map(img => img.addEventListener("click", cart.addProduct));

            document.getElementById("boton")  
        }
