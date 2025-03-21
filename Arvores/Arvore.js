import No from "./No.js";

class Arvore {
    raiz;
    constructor(no) {
        if (no instanceof No){
            this.raiz = no;
        } else {
            throw new Error("A raiz deve ser um nó!");
        }
    }
}

export default Arvore;