import { Cell } from './cell.model';
import { Enviroment } from './enviroment.model';
import { Evolution } from './evolution.model';
export class MultipleMatch implements Evolution{
    
    evolve(cells: Cell[], token: string, idx: number = 0): Cell[]{
        let cellsEvolution: Cell[] = [...cells];
        for(let j=0; j < cellsEvolution.length; j++){
            let cellIteration: Cell = cellsEvolution[j].react(token,idx)[0];
            if(cellIteration !== undefined && cellIteration != cellsEvolution[j]){
                cellIteration.environment = new Enviroment(idx, cells[j]);
                cells.push(cellIteration);
            }
        }  
        return cells;
    }
}