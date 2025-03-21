import Vertice from "./Vertice";

class Aresta {
    nome = "";
    vertices = [];
    custo = "";
    constructor(nome, v1 = null, v2 = null, custo) {
        this.nome = nome;        
        if(v1 && v2 
            && v1 instanceof Vertice
            && v2 instanceof Vertice
        ){
            this.vertices = [v1,v2];
            v1.arestas.push(this);
            v2.arestas.push(this);
        }
        this.custo = custo;
    }
}

export default Aresta;