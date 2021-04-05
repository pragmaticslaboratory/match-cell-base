/******************************
 * IMPORTS
 ******************************/
import { Rule } from './rule.interface';
import { Cell } from '../cell.model';
import { Pattern } from '../patterns/pattern.interface';
export class Identity implements Rule{
    
    apply(cells: Cell[], pattern: Pattern): Cell[]{
        return cells;
    }
}