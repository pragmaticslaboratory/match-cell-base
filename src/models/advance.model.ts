import { MatchResult } from './matchresult.interface';
import { Cell } from './cell.model';
import { Pattern } from './pattern.interface';
export class Advance implements MatchResult{

    constructor(
        public pattern: Pattern
    ){
        this.pattern = pattern;
    }

    next(cell: Cell): Cell{
        return null;
    }
}