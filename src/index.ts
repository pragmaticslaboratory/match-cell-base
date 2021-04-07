/******************************
 * IMPORTS
 ******************************/
import { Symbol } from "./models/patterns/symbol.model";
import { Sequence } from './models/patterns/sequence.model';
import { Solution } from './models/solution.model';
import { Cell } from "./models/cell.model";
import { AddSeed } from './models/rules/addseed.model';
import { MetaInformation } from "./models/metaInformationModel";
import { OnlyOneMatch } from './models/evolution/onlyOneMatch.model';
import { Star } from './models/patterns/star.model';
import { Plus } from './models/patterns/plus.model';

// TOKEN
// let token = "acbcxbxacx";//
let token = "aacbcxbxacx";//

// SIMBOLOS BASICOS
const symA = new Symbol("a");
const symB = new Symbol("b");
const symC = new Symbol("c");
const symX = new Symbol("x");

// CLAUSURA
let starA = new Star(symA);
let plusA = new Plus(symA);

// SECUENCIA
let seqAC = new Sequence(symA,symC);
let seqACX = new Sequence(new Sequence(symA,symC), symX);
let seqABC1 = new Sequence(new Sequence(symA,symB), symC)
let seqA_BC = new Sequence(new Sequence(plusA,symB), symC)

// let seqACBX = new Sequence(new Sequence(symA,symC), new Sequence(symB,symX));


// SOLUCIONES
// let solutionMM = new Solution([new Cell(seqACX, new MetaInformation(0))],new MultipleMatch());
// let solutionOOM = new Solution([new Cell(seqACX, new MetaInformation(0))],new OnlyOneMatch(), new AddSeed());
let solutionOOM = new Solution([new Cell(seqA_BC, new MetaInformation(0))],new OnlyOneMatch(), new AddSeed());

// EVALUACIONES DE CADA SOLUCIÓN - OOM (Only one match) - MM (Multiple Match)
console.log(`Only One Match`);
solutionOOM.match(token);
// console.log(`Multiple Match`);
// solutionMM.match(token);

console.log('---------------------------------------------------------');
