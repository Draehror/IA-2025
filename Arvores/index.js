import  No  from "./No.js";
import  Arvore  from "./Arvore.js";
import  NoB  from "./NoB.js";
import  ArvoreB  from "./ArvoreB.js";


const noA = new No("A");
const noB = new No("B");
const noC = new No("C");
const noD = new No("D");
const noE = new No("E");
const noF = new No("F");
const noG = new No("G");
const noH = new No("H");
const noI = new No("I");

const arvore = new Arvore(noA);

noA.adicionarFilho(noB);
noA.adicionarFilho(noC);
noC.adicionarFilho(noD);
noC.adicionarFilho(noE);
noC.adicionarFilho(noF);
noD.adicionarFilho(noG);
noD.adicionarFilho(noH);
noF.adicionarFilho(noI);

const noAB = new NoB("A");
const noBB = new NoB("B");
const noCB = new NoB("C");
const noDB = new NoB("D");
const noEB = new NoB("E");
const noFB = new NoB("F");
const noGB = new NoB("G");
const noHB = new NoB("H");
const noIB = new NoB("I");

const arvoreB = new ArvoreB(noAB);

noAB.addFilhoEsquerda(noBB);
noAB.addFilhoDireita(noCB);
noBB.addFilhoEsquerda(noDB);
noCB.addFilhoEsquerda(noEB);
noCB.addFilhoDireita(noFB);
noDB.addFilhoDireita(noGB);
noEB.addFilhoEsquerda(noHB);
noEB.addFilhoDireita(noIB);

console.log("Pré Ordem:");
arvoreB.buscaPreOrdem();

console.log("Em Ordem:");
arvoreB.buscaInOrdem();

console.log("Pós Ordem:");
arvoreB.buscaPosOrdem();



//arvoreB.buscaLargura();