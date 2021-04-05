/******************************
 * IMPORTS
 ******************************/
import { Cell } from '../cell.model';
import { Pattern } from '../patterns/pattern.interface';
export interface Rule{
    apply(cells: Cell[], pattern: Pattern): Cell[];
}