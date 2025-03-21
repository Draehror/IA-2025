import Vertice from "./Vertice.js";

class Rastreador {
    custo = 0;
    vertice = null;
    anterior = null;

    constructor(vertice, anterior, custoAtual) {
        this.vertice = vertice;
        this.anterior = anterior;
        if(anterior == null || anterior.custo == null){
            this.custo = custoAtual;
        } else {
            this.custo = anterior.custo + custoAtual;
        }
    }

    funcaoAvaliacao(){
        return (this.custo + this.vertice.heuristica);
    }
    heuristica(){
        return this.vertice.heuristica;
    }
}

export default Rastreador;