class bebida extends HTMLElement{
    constructor(){
        super();
        this.nombre;
        this.precio;
        this.imagen;
    }

    static get observedAttributes(){
        return ['nombre', "precio", "imagen"];
    }

    attributeChangedCallback(attrib, oldValue, newValue){
        switch(attrib){
            case "nombre":
                this.nombre = newValue;
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
            <p>${this.precio} €</p>
        </div>`;
    }

    obtenerPrecio() {
        let precioBebidas = document.querySelector('.precioBebidas');
        let nuevoParsed = parseFloat(this.precio);
        let actualParsed = parseFloat(precioBebidas.innerHTML);
        let sumaPrecios = actualParsed + nuevoParsed;
        precioBebidas.innerHTML = sumaPrecios + " €";
    }
}

window.customElements.define("bebida-element", bebida);