/******************************
 * IMPORTS
 ******************************/
 import { Cell } from '../cell.model';
import { MetaInformation } from '../metaInformationModel';
import { Evolution } from './evolution.interface';
export class MultipleMatch implements Evolution{
    
    evolve(cells: Cell[], token: string, idx: number = 0): Cell[]{
        let cellsEvolution: Cell[] = [...cells];
        for(let j=0; j < cellsEvolution.length; j++){
            let cellIteration: Cell = cellsEvolution[j].react(token,idx)[0];
            if(cellIteration !== undefined && cellIteration != cellsEvolution[j]){
                cellIteration.metaInformation = new MetaInformation(idx, cells[j]);
                cells.push(cellIteration);
            }
        }  
        return cells;
    }
}