import Vertice from "Vertice.js";
import Aresta from "Aresta.js";

class Rastreador {
    vertice = "";
    rastreador = "";
    custo = "";
    constructor(v, ras, custo) {
        this.vertice = v;
        this.rastreador = ras;
        this.custo = custo;
    }

    funcao(vertice){
        return vertice.heuristica + this.custo;
    }



}