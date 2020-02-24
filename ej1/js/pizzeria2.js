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
    // Mostrar lista con pizzas
    mostrarPizzasDisponibles();

    // Importe a 0
    importe = 0;
    mostrarImporte(importe);

    // Cargar listeners
    cargarListenerLista();

}

function mostrarPizzasDisponibles() {
    let miSelect = document.getElementById("lista");

    // Añadir pizzas al select (usando DOM y fat arrow)
    pizzas.forEach(pizza => {
        // Creamos nodo option
        opcion = document.createElement("option");

        // Rellenamos option
        opcion.text = pizza.nombre;
        opcion.value = pizza.codigo;

        // Añadimos option al select
        miSelect.appendChild(opcion);
    });
}

function mostrarImporte(importe) {
    capa = document.getElementById("importe");

    // No hace falta, pero por si quisieran cambiar "Importe: " por "Total pizza: " o similar.
    texto = capa.firstChild.nodeValue.split(":")[0];

    capa.firstChild.nodeValue = texto + ": " + importe + "€";
}

function cargarListenerLista() {
    let miSelect = document.getElementById("lista");

    miSelect.addEventListener("change", cambioPizza);
}

function cambioPizza(evento) {
    let capaFoto = document.getElementById("fotopizza");
    let capaIngredientes = document.getElementById("ingredientes");
    let capaImporte = document.getElementById("importe");

    // Borramos elementos anteriores vía innerHTML
    capaFoto.innerHTML = "";
    capaIngredientes.innerHTML = "";

    // Obtenemos codigo de la pizza seleccionada y la buscamos
    let codigoSeleccionado = evento.srcElement.value;
    let pizzaSeleccionada = pizzas.find(pizza => pizza.codigo == codigoSeleccionado);



    // Si hay alguna pizza válida, mostramos ingredientes y de paso calculamos precio		
    let precio;
    if (codigoSeleccionado == "P0") {
        precio = 0;
    } else {
        let html = "";
        precio = 5; // precio base

        // Creamos y configuramos imagen en DOM (y después la insertamos)
        let imagen = document.createElement("img");
        imagen.src = codigoSeleccionado + ".jpg";
        imagen.className = "imagencss";
        capaFoto.appendChild(imagen);

        pizzaSeleccionada.ingredientes.map(ing => {
            // Añadimos ingrediente a mostrar
            html += "<p>" + ing.ingrediente + "</p>"

            // Modificamos precio
            precio += parseFloat(ing.precio);
        });

        capaIngredientes.innerHTML = html;
    }
    mostrarImporte(precio);
}