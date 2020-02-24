class Cart {
    constructor(id) {
        this.id = id
        this.products = []
    }

    addProduct(event) {
        
        let data = event.name.split("|")
        let product = new Product(data[0], data[1], data[2])
        let productExsit = this.products.find(prod => product.id == prod.id)
        

        if (productExsit) { productExsit.quantity++
             console.log(productExsit.quantity);} else { this.products.push(product) }
        
    this.printCart()
    }
    printCart() {
        
       let car = `
        <table class="table">
        <tr>
        <th>Codigo</th><th>Descripción</th><th>Precio</th><th>Unidades</th>
        </tr>
        `
        
        this.products.forEach(product => {
            car += `
            <tr id ="${product.id}">
            <td>${product.id}</td>
            <td>${product.desc}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td><input type="text" id="text-box-downgrade--${product.id}"></td>
            <td><input value="borrar" type="button" class="downgrade"></td>

            </tr>
            `
        })
        car += "</table>"
        document.getElementById("cart").innerHTML = car
    }
    quantityDown(id, quantity) {

       let pSelec = this.products.find(pro => pro.id == id);
        if (pSelec.quantity > quantity) { pSelec.quantity -= quantity }
        this.printCart()
    }
    refresh(){
        this.printCart()
        applyListeners(this)
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
window.onload = function () {
    let cart = new Cart(1)
    cart.refresh()
    
}
function applyListeners(cart){
   
    let buttons = document.getElementsByClassName("downgrade")

    Array.from(buttons).map(button => button.addEventListener("click",function(){
        let id = button.parentNode.parentNode.id
        let quantity = document.getElementById(`text-box-downgrade--${id}`).value
        cart.quantityDown(id,quantity)
    }))
    
    let img = document.getElementById("images").childNodes
    Array.from(img).map(image => image.addEventListener("click",function(){
        console.log("xd")
        cart.addProduct(this)
    })
    )
}
