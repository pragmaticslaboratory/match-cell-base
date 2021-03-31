import { MatchResult } from './matchresult.interface';
import { Cell } from './cell.model';
export class Stuck implements MatchResult{
    next(cell: Cell): Cell{
        return null;
    }
}