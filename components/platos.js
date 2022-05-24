class platos extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<div class="conjunto-platos">
            <h2>Pizzas</h2>
            <div class="platos">
                <plato-element class="plato" onclick="obtenerPrecio()" nombre="Margarita" precio=12.50 descripcion="Mozarella, Tomate y Albahaca" imagen='/img/margarita.jpeg'></plato-element>
                <plato-element class="plato" onclick="obtenerPrecio()" nombre="Carbonara" precio=15.50 descripcion="Salsa carbonara, Cebolla, Bacon y Champiñones" imagen='/img/carbonara.jpeg'></plato-element>
                <plato-element class="plato" onclick="obtenerPrecio()" nombre="Pepperoni" precio=13 descripcion="Mozarella, Tomate y Pepperoni" imagen='/img/pepperoni.webp'></plato-element>
            </div>

        </div>`;
    }
}

window.customElements.define("platos-element", platos);