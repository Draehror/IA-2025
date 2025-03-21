import Aresta from "Aresta.js";

class Vertice {
    Valor = '';
    Aresta = [];
    constructor(valor) {
        this.Valor = valor;
    }

    addAresta(vertice){
        if (vertice instanceof Vertice){
            this.Aresta.push(vertice);
        }else{
            throw new Error("O filho deve ser um nó.");
            
        }
    }
}

export default Vertice;