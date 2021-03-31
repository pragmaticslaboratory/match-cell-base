// //npx tsc --init
// //npx tsc
// //node dist/script.js

import { Symbol } from "./models/symbol.model";
import { Sequence } from './models/sequence.model';
import { Solution } from './models/solution.model';
import { Cell } from "./models/cell.model";
import { AddSeed } from './models/addseed.model';
import { Enviroment } from "./models/enviroment.model";
import { MultipleMatch } from './models/multipleMatch.model';
import { OnlyOneMatch } from './models/onlyOneMatch.model';

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
// let solution = new Solution([new Cell(seqABC1, new Enviroment(0))],new MultipleMatch());
let solution = new Solution([new Cell(seqABC1, new Enviroment(0))],new OnlyOneMatch(), new AddSeed());

solution.match(token);

console.log('---------------------------------------------------------');
