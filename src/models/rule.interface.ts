import { Cell } from './cell.model';
import { Pattern } from './pattern.interface';
export interface Rule{
    apply(cells: Cell[], pattern: Pattern): Cell[];
}