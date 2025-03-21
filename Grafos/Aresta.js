import Vertice from "Vertice.js";

class Aresta {
    Valor = '';
    Vertice1 = '';
    Vertice2 = '';
    constructor(valor, v1, v2) {
        this.Valor = valor;
        this.Vertice1 = v1;
        this.Vertice2 = v2;
    }
}

export default Aresta;