import NoB from "./NoB.js";

class BuscaLargura {
    static buscaLargura(raiz){
        if(!raiz){
            return;
        }

        let fila = [raiz];
        let atual = null;

        while(fila.length > 0){

            atual = fila.shift();
            console.log(atual.valor);
            
            if(atual.filhoEsquerda){
                fila.push(atual.filhoEsquerda);
            }
            if(atual.filhoDireita){
                fila.push(atual.filhoDireita);
            }
        }
    }
    // static buscaLargura(no){
    //     if(!no)
    //         return;
    //     let vet = [];
        
    //     while (vet[i] < vet.length) {
    //         console.log(no.valor);
    //         i++;
    //         if(no.filhoEsquerda != null)
    //             vet[i] = no.filhoEsquerda;
    //         if(no.filhoDireita != null)
    //             vet[i] = no.filhoDireita; 
    //         this.buscaLargura(vet[i]);
    //     }
    // }
    
}

export default BuscaLargura;