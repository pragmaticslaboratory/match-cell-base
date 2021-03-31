import { Cell } from './cell.model';
import { ComposableRule } from './composablerule.model';
import { Pattern } from './pattern.interface';
export class AddSeed extends ComposableRule{
    apply(cells: Cell[], pattern: Pattern): Cell[]{
        return (cells.length === 0) ? [new Cell(pattern, null)] : cells;
    }
}