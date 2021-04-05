/******************************
 * IMPORTS
 ******************************/
 import { Cell } from '../cell.model';
import { Evolution } from './evolution.interface';
export class OnlyOneMatch implements Evolution{
    
    evolve(cells: Cell[], token: string, idx: number = 0): Cell[]{
        return cells[0].react(token, idx);
    }
}