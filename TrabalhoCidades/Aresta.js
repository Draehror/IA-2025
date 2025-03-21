import Vertice from "./Vertice.js";

class Aresta {
    vertices = [];
    nome = "";
    custo = 0;
    constructor(nome,v1 = null,v2 = null,custo = 0) {
        this.nome = nome;
        this.custo = custo;
        if(v1 && v2 && v1 instanceof Vertice && v2 instanceof Vertice){
            this.vertices = [v1,v2];
            v1.arestas.push(this);
            v2.arestas.push(this);
        }
    }
}

export default Aresta;