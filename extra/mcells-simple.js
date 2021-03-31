//helper
let DEBUG = true;

function log(msg) {
    if (DEBUG) console.log(msg);
}

function removeDuplicate(arr) {
    return arr.filter(function (item, pos) {
        return arr.indexOf(item) === pos;
    });
}

/////////////////////////////////////////
/*Constants *****************/

//empty body, they are only necessary to show the concepts (they may be just "true" and "false")
function matchCell(sym) {
}

/********************/


/*Operators****************/
function sym(s) {
    return function inner(sym) {
        return s === sym ? matchCell : inner;
    }
}

function seq(l, r) {  // seq(seq(a,b),c)
    return function inner(sym) {
        let result = l(sym);
        if (result === l) return inner; // no iguales
        if (result !== matchCell) return seq(result, r); //seq(b,c)
        return r; //c
    }
}

//a->b->c->d seqN([a,b,c,d]); seq(a,seq(b,seq(c,d)))
function seqN(op) {
    let result = seq(op[0], op[1]);
    for (let i = 2; i < op.length; ++i) {
        result = seq(result, op[i]);
    }
    return result;
}

function star(op) {
    return function inner(sym) {
        let result = op(sym);
        if (result === inner) return matchCell;
        if (result === matchCell) return inner;
        return star(result);
    }
}

function plus(op) {
    return function inner(sym) {
        return seq(op(sym), star(sym));
    }
}

function plusN(op, n) {  //a[3]
    let ar = [];
    for (let i = 0; i < n; ++i) {
        ar.push(op);
    }
    return seqN(ar); //seq([a,a])
}

function or(l, r) {
    return function inner(sym) {
        let resultL = l(sym);
        let resultR = r(sym);

        if (resultL === matchCell || resultR === matchCell) return matchCell;
        if (resultL !== l && resultR !== r) return or(resultL, resultR);
        return inner;
    }
}

function negation(op) {
    return function inner(sym) {
        let result = op(sym);
        if (result === matchCell) return inner;
        if (result === op) return matchCell;
        return negation(result);
    }
}

/***************/


/*Engines***************/
function makeEngine(evolve, after) { //before, around, after???
    after = after === undefined ? identity : after;

    //engine
    return function (pattern, input) {
        let cells = [pattern];
        for (let i = 0; i < input.length && cells.length > 0; ++i) {
            
            // log(cells)
            let sym = input[i];
            // log(sym)
            cells = evolve(cells, sym);

            cells.forEach(cell => {
                if (cell === matchCell) console.log("MATCH. Symbol:" + sym + " index:" + i)
            });
            cells = clean(cells); //only to remove garbage
            cells = after(cells, pattern);
        }
    }
}

function identity(cells, p) {
    return cells;
}

// borrar los matchcell
function clean(cells) {
    return cells.filter(cell => cell !== matchCell);
}

function addSeed(cells, pattern) {
    return cells.length === 0 ? [pattern] : cells;
}

function onlyOneMatch(cells, sym) {
    return [cells[0](sym)];
}

function multipleMatch(cells, sym) {
    return cells.flatMap(cell => cell(sym) !== cell ? cell(sym) : []).concat(cells);
}

/********************/

//Pattern
let input = "acbcxbxacx";//

//Tests
let symA = sym("a");
let symB = sym("b");
let symC = sym("c");
let symX = sym("x");

let aN = plusN(symA, 2); //(aa)
let bN = plusN(symB, 2); // bb

let seqA2B2 = seq(aN, bN);
let seqAB = seq(symA, symB);
let seqABC1 = seq(seqAB, symC);
let seqACX = seqN([symA, symC, symX]);
//let seqACX = seq(symA, seq(symC, symX));

let engineSingleMatch = makeEngine(onlyOneMatch, addSeed);
let engineMultipleMatch = makeEngine(multipleMatch);
console.log("input:" + input);


log("\nSingle Match");
engineSingleMatch(seqABC1, input);
// engineSingleMatch(seqACX, input);
//engineSingleMatch(seqAB, input);

log("\nMultiple Match");
engineMultipleMatch(seqABC1, input);

