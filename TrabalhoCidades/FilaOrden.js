class FilaOrden {
    rastreador = [];
    constructor() {
        
    }

    add(rastreador){
        this.rastreador.push(rastreador);
    }
    addSort(rastreador){
        this.rastreador.push(rastreador);
        this.rastreador.sort(function (a,b) {
            if(a.funcaoAvaliacao() >= b.funcaoAvaliacao()){
                return 1;
            } else {
                return -1;
            }
        });        
    }
    shift(){
        return this.rastreador.shift();
    }
    remove(){
        this.rastreador.pop();
    }
    removePrimeiro(){
        return this.rastreador.shift();
    }
    primeiro(){
        return this.rastreador[0];
    }
}

export default FilaOrden;