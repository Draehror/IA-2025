import NoB from "./NoB.js";
import BuscaProfundidade from "./BuscaProfundidade.js";
import BuscaLargura from "./BuscaLargura.js";

class ArvoreB {
    raiz;
    constructor(no) {
        if (no instanceof NoB){
            this.raiz = no;
        } else {
            throw new Error("A raiz deve ser um nó!");
        }
    }

    buscaPreOrdem(){
        BuscaProfundidade.preOrdem(this.raiz);
    }
    buscaInOrdem(){
        BuscaProfundidade.inOrdem(this.raiz);
    }
    buscaPosOrdem(){
        BuscaProfundidade.posOrdem(this.raiz);
    }
    buscaLargura(){
        BuscaLargura.buscaLargura(this.raiz);
    }
}


export default ArvoreB;