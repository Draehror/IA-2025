class Vertice {
    nome = '';
    heuristica = 0;
    arestas = [];

    constructor(nome,heuristica) {
        this.nome = nome;
        this.heuristica = heuristica;
    }
}

export default Vertice;