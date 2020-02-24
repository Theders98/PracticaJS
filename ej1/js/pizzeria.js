pizzas = [{
    'codigo': 'P0',
    'nombre': '--- Selecciona una Pizza ---',
    'ingredientes': []
},
{
    'codigo': 'P1',
    'nombre': 'Prosciutto',
    'ingredientes': [{ 'ingrediente': 'salsa de tomate', 'precio': '0.5' },
    { 'ingrediente': 'mozzarella', 'precio': '0.5' },
    { 'ingrediente': 'jamón york', 'precio': '0.75' }
    ]
},
{
    'codigo': 'P2',
    'nombre': 'Capricciosa',
    'ingredientes': [{ 'ingrediente': 'salsa de tomate', 'precio': '0.5' },
    { 'ingrediente': 'mozzarella', 'precio': '0.5' },
    { 'ingrediente': 'jamón york', 'precio': '0.75' },
    { 'ingrediente': 'alcachofas', 'precio': '1' },
    { 'ingrediente': 'champiñones', 'precio': '0.5' },
    { 'ingrediente': 'olivas negras', 'precio': '0.25' }
    ]
},
{
    'codigo': 'P3',
    'nombre': 'Cuatro Formaggi',
    'ingredientes': [{ 'ingrediente': 'salsa de tomate', 'precio': '0.5' },
    { 'ingrediente': 'mozzarella', 'precio': '0.5' },
    { 'ingrediente': 'gorgonzola', 'precio': '1.25' },
    { 'ingrediente': 'emmemtal', 'precio': '1' },
    { 'ingrediente': 'brie', 'precio': '0.75' }
    ]
}
];

window.onload = function () {
    mostrarPizzasDisponibles()
}

function mostrarPizzasDisponibles() {

   let lista = document.getElementById("lista")
   lista.addEventListener("change", cambioPizza)

pizzas.forEach(pizza => {

   let opcion = document.createElement("option")
    opcion.text = pizza.nombre
    opcion.value = pizza.codigo

    lista.appendChild(opcion)
});
}

function mostrarImporte(importe) {

}


function cambioPizza(evento) {

   let imagenSelec = document.createElement("img")
   imagenSelec.setAttribute("src",`img/${evento.srcElement.value}.jpg`)
   document.getElementById("fotopizza").innerHTML = ""
   document.getElementById("fotopizza").appendChild(imagenSelec)
let html = "";
let precio = 5;
pizzas.forEach(pizza => {
    
if(evento.srcElement.value == pizza.codigo){

    pizza.ingredientes.forEach(ingrediente => {
         html += `<li>${ingrediente.ingrediente}</li>`
        precio = precio + parseFloat(ingrediente.precio) 
    })

    document.getElementById("ingredientes").innerHTML = html
}

});
    document.getElementById("importe").innerHTML = `Tu total es: ${precio} €`

}