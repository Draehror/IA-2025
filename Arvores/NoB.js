class NoB {
    valor = "";
    filhoEsquerda = null;
    filhoDireita = null;
    constructor(valor) {
        this.valor = valor;
    }

    addFilhoEsquerda(no){
        if (no instanceof NoB){
            this.filhoEsquerda = no;
        } else {
            throw new Error("O filho deve ser um nó!");
        }
    }

    addFilhoDireita(no){
        if (no instanceof NoB){
            this.filhoDireita = no;
        } else {
            throw new Error("O filho deve ser um nó!");
        }
    }
}

export default NoB;