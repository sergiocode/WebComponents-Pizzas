class carrito extends HTMLElement {
    constructor() {
        super();
        function funcionamiento() {
            alert('Funciona');
        }
    }

    connectedCallback() {
        this.innerHTML = `<div class="carrito">
            <h3>Carrito</h3>
            <div class="seccion-carrito">
                <div class="precio-label">Pizzas: </div>
                <p class="precioPizzas">0</p>
            </div>
            <div class="seccion-carrito">
                <div class="precio-label">Bebida: </div>
                <p class="precioBebidas">0</p>
            </div>
            <button onclick="mostrarPrecio(sumarPrecios())">Calcular</button>
            <div class="seccion-carrito">
                <div class="precio-label">Total: </div>
                <p class="precioCarrito">0</p>
            </div>
        </div>`;
    }

    // sumarPrecios() {
    //     let precioPizzas = document.querySelector('.precioPizzas');
    //     let pizzasParsed = parseFloat(precioPizzas.innerHTML);

    //     let precioBebida = document.querySelector('.precioBebidas');
    //     let bebidaParsed = parseFloat(precioBebida.innerHTML);

    //     return pizzasParsed + bebidaParsed;
    // }

    // mostrarPrecio(sumarPrecios) {
    //     let precioCarrito = document.querySelector('.precioCarrito');
    //     precioCarrito.innerHTML = sumarPrecios + " €";
    // }
}

window.customElements.define('carrito-element', carrito);