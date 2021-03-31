import { MatchResult } from './matchresult.interface';
import { Cell } from './cell.model';
export class Match implements MatchResult{
    next(cell: Cell): Cell{
        return null;
    }
}