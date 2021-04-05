// //npx tsc --init
// //npx tsc
// //node dist/script.js

import { Symbol } from "./models/patterns/symbol.model";
import { Sequence } from './models/patterns/sequence.model';
import { Solution } from './models/solution.model';
import { Cell } from "./models/cell.model";
import { AddSeed } from './models/rules/addseed.model';
import { MetaInformation } from "./models/metaInformationModel";
import { MultipleMatch } from './models/evolution/multipleMatch.model';
import { OnlyOneMatch } from './models/evolution/onlyOneMatch.model';

// TOKEN
let token = "acbcxbxacx";//

// SIMBOLOS
const symA = new Symbol("a");
const symB = new Symbol("b");
const symC = new Symbol("c");
const symX = new Symbol("x");

// SECUENCIA
let seqACX = new Sequence(new Sequence(symA,symC), symX);
let seqABC1 = new Sequence(new Sequence(symA,symB), symC)
// let seqACBX = new Sequence(new Sequence(symA,symC), new Sequence(symB,symX));

// SOLUCION
let solutionMM = new Solution([new Cell(seqABC1, new MetaInformation(0))],new MultipleMatch());
let solutionOOM = new Solution([new Cell(seqABC1, new MetaInformation(0))],new OnlyOneMatch(), new AddSeed());

console.log(`Only One Match`);
solutionOOM.match(token);
console.log(`Multiple Match`);
solutionMM.match(token);

console.log('---------------------------------------------------------');
