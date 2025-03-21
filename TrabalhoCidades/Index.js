import Aresta from "./Aresta.js";
import Vertice from "./Vertice.js";
import Rastreador from "./Rastreador.js";
import FilaOrden from "./FilaOrden.js"

//Heuristica é o tempo médio em minutos de todas as rotas sem retorno até a o destino
const S = new Vertice("Juiz de Fora", 135);
const A = new Vertice("Torreões", 84);
const B = new Vertice("Santa Barbara do Monte Verde", 62);
const C = new Vertice("Rio Preto", 37);
const D = new Vertice("Pentagna", 24);
const E = new Vertice("Matias Barbosa", 92);
const F = new Vertice("Afonso Arinos", 71);
const G = new Vertice("Porto das Flores", 38);
const H = new Vertice("Rio das Flores", 28);
const I = new Vertice("Comendador Levy Gasparian", 96);
const J = new Vertice("Três Rios", 98);
const K = new Vertice("Andrade Pinto", 69);
const Z = new Vertice("Valença", 0);

const a1 = new Aresta("JF/Torreoes", S, A, 30);
const a2 = new Aresta("Torreoes/SantaBarbara", A, B, 28);
const a3 = new Aresta("SantaBarbara/RioPreto", B, C, 24);
const a4 = new Aresta("RioPreto/Pentagna", C, D, 14);
const a5 = new Aresta("RioPreto/PortoFlores", C, G, 37);
const a6 = new Aresta("Pentagna/Valença", D, Z, 28);
const a7 = new Aresta("JF/Matias", S, E, 21);
const a8 = new Aresta("Matias/AfonsoArinos", E, F, 24);
const a9 = new Aresta("AfonsoArinos/PortoFlores", F, G, 30);
const a10 = new Aresta("PortoFlores/RioFlores", G, H, 10);
const a11 = new Aresta("RioFlores/AndradePinto", H, K, 28);
const a12 = new Aresta("RioFlores/Valença", H, Z, 18);
const a13 = new Aresta("Matias/LevyGasparian", E, I, 27);
const a14 = new Aresta("LevyGasparian/TresRios", I, J, 15);
const a15 = new Aresta("TresRios/AndradePinto", J, K, 28);


function Busca(inicio, destino) {
    const fila = new FilaOrden();
    const rastreadorInicial = new Rastreador(inicio, null, 0);
    const visitados = new Set();

    fila.addSort(rastreadorInicial);

    while (fila.rastreador.length > 0) {
        const rastreadorAtual = fila.shift();
        const verticeAtual = rastreadorAtual.vertice;

        if (verticeAtual === destino) {
            let caminho = [];
            let rastreador = rastreadorAtual;
            while (rastreador != null) {
                caminho.unshift(rastreador.vertice.nome);
                rastreador = rastreador.anterior;
            }
            return caminho;
        }

        if (!visitados.has(verticeAtual)) {
            visitados.add(verticeAtual);
            
            verticeAtual.arestas.forEach(aresta => {
                const proximo = aresta.vertices[0] === verticeAtual ? aresta.vertices[1] : aresta.vertices[0];

                if (!visitados.has(proximo)) {
                    const novoRastreador = new Rastreador(proximo, rastreadorAtual, aresta.custo);
                    fila.addSort(novoRastreador);
                }
            });
        }
    }

    return null;
}

const caminho = Busca(S, Z);
//console.log(caminho);

//console.log(`O melhor caminho até ${Z} é: "`);
let resultado = `O melhor caminho até ${Z.nome} é seguir de `
for(var i = 0; i < caminho.length -1; i++){
    resultado += caminho[i] + " até ";
}
resultado += `${Z.nome}`;
console.log(resultado);

// let array = [];
// let r1 = new Rastreador(A, C, 100);
// let r2 = new Rastreador(B, A, 200);
// let r3 = new Rastreador(C, B, 150);
// array.push(r1);
// array.push(r2);
// array.push(r3);


// //console.log(a9.custo);

// console.log(array);
// console.log("--------------------------------------------------------");

// let filaOrden = new FilaOrden();
// filaOrden.addSort(r1);
// filaOrden.addSort(r2);
// filaOrden.addSort(r3);

// console.log(filaOrden);


// function buscar(origem, meta) {
//     let abertos = new FilaOrden();
//     let fechados = [];
//     let atual;

//     abertos.add(new Rastreador(origem, null, 0));
//     for(atual = abertos.primeiro; atual != null; atual = abertos.primeiro){
//         if(atual.vertice == meta){
//             return true;
//         } else {
//             fechados.add(atual.vertice, atual);
//         }
//     }
// }