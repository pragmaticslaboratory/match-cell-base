import { Cell } from './cell.model';
import { Rule } from './rule.interface';
import { Identity } from './identity.model';
import { Pattern } from './pattern.interface';
import { OnlyOneMatch } from './onlyOneMatch.model';
import { Evolution } from './evolution.model';
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