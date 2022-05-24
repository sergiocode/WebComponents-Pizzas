class bebidas extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<div class="conjunto-bebidas">
            <h2>Bebidas</h2>
            <div class="bebidas">
                <bebida-element class="plato" onclick="obtenerPrecio()" nombre="Coca-Cola" precio=1.50 imagen='/img/cola.png'></bebida-element>
                <bebida-element class="plato" onclick="obtenerPrecio()" nombre="Mahou Maestra" precio=12.50 imagen='/img/maestra.png'></bebida-element>
            </div>
        </div>`;
    }
}

window.customElements.define("bebidas-element", bebidas);