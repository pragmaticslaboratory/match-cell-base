/******************************
 * IMPORTS
 ******************************/
import { Cell } from './cell.model';
import { Rule } from './rules/rule.interface';
import { Identity } from './rules/identity.model';
import { Pattern } from './patterns/pattern.interface';
import { OnlyOneMatch } from './evolution/onlyOneMatch.model';
import { Evolution } from './evolution/evolution.interface';

export class Solution{
    
    constructor(
        public cells: Cell[],
        public evolution?: Evolution,
        public rules?: Rule
    ){
        this.cells = cells;
        this.evolution = (evolution === undefined)? new OnlyOneMatch() : evolution;
        this.rules = (rules === undefined)? new Identity() : rules;
    }

    match(token: string){
        // INITIAL PATTERN
        const initialPattern: Pattern = this.cells[0].pattern;
        console.log(` Token: ${token} `);
        console.log(` Patron Inicial: ${initialPattern}`);
        for(let i=0; i < token.length && this.cells.length > 0;i++){
            // TOKEN SYMBOL
            let symTkn: string = token[i];
            
            // CELLS EVOLUTION
            this.cells = this.evolution.evolve(this.cells, symTkn, i);

            // RULES POST-EVOLUTION
            this.cells = this.rules.apply(this.cells, initialPattern);
        }
    }

}