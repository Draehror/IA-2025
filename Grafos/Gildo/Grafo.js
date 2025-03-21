import Vertice from "./Vertice";
import Aresta from "./Aresta";

class Grafo {
    vertices = [];
    arestas = [];
    constructor() {
        
    }
    addVertice(valor){
        const vertice = new Vertice(valor)
        this.vertices.push(vertice);
        return vertice;
    }
    addAresta(nome,v1,v2){
        const aresta = new Aresta(nome,v1,v2);
        this.arestas.push(aresta);
        return aresta;
    }
}