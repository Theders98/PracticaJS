class Cart {
    constructor(date, number) {
        this.date = date;
        this.number = number;
        this.products = []
    }

    addProduct(event) {
        let data = event.name.split("|");

        let product = new Product(data[0], data[1], data[2])
        let selectedProduct = this.products.find(p => p.id == product.id)

        if (!selectedProduct) { this.products.push(product) } else { selectedProduct.quantity++ }
    }

    printCart() {
        let total = 0;
        let html = ""

        html += `
            <table>
            <tr>
            <th>Codigo</th><th>Descripción</th><th>Precio</th><th>Unidades</th>
            </tr>`
        this.products.forEach(function(product) {
            html += `<tr>
            <td>${product.id}</td>
            <td> ${product.desc}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
        </tr>`;
            total += product.price * product.quantity
        })

        html += `<h3>Total ${total}</h3>`

        document.getElementById("listaCarrito").innerHTML = html
    }
}

class Product {

    constructor(id, desc, price) {
        this.id = id
        this.desc = desc
        this.price = price
        this.quantity = 1
    }

}
window.onload = function() {

    let cart = new Cart("24/07/2020", 1)
    let img = document.getElementsByClassName("images");
    let imgS = document.img[0].childNodes;
    console.log(imgS)
    let imagenes = document.getElementsByTagName("img")

    Array.from(imagenes).map(img => img.addEventListener("click", function() {
        cart.addProduct(this)
    }));

    document.getElementById("boton").addEventListener("click", function() {
        cart.printCart()
    });
}