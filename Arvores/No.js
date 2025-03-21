class No {
    valor = '';
    filhos = [];
    constructor(valor) {
        this.valor = valor;
    }

    adicionarFilho(no){
        if (no instanceof No){
            this.filhos.push(no);
        }else{
            throw new Error("O filho deve ser um nó.");
            
        }
    }
}

export default No;