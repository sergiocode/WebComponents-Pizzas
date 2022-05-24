class plato extends HTMLElement{
    constructor(){
        super();
        this.nombre;
        this.descripcion;
        this.precio;
        this.imagen;
    }

    static get observedAttributes(){
        return ['nombre', "precio", "descripcion", "imagen"];
    }

    attributeChangedCallback(attrib, oldValue, newValue){
        switch(attrib){
            case "nombre":
                this.nombre = newValue;
            break;
            case "descripcion":
                this.descripcion = newValue;
            break;
            case "precio":
                this.precio = newValue;
            break;
            case "imagen":
                this.imagen = newValue;
            break;
        }
    }

    connectedCallback(){
        this.innerHTML = `<div class="plato-card" 
        onmouseenter="style.backgroundColor = '#69e769'"
        onmouseleave="style.backgroundColor = 'white'"
        onclick="">
            <div class="plato-div-imagen">
                <img src="${this.imagen}" alt="No se ha encontrado la imagen" class="imagen-plato">
            </div>
            <h1>${this.nombre}</h1>
            <p>${this.descripcion}</p>
            <p>${this.precio} €</p>
        </div>`;
    }

    obtenerPrecio() {
        let precioPizzas = document.querySelector('.precioPizzas');
        let nuevoParsed = parseFloat(this.precio);
        let actualParsed = parseFloat(precioPizzas.innerHTML);
        let sumaPrecios = actualParsed + nuevoParsed;
        precioPizzas.innerHTML = sumaPrecios + " €";
    }
}

window.customElements.define("plato-element", plato);