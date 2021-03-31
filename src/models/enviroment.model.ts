import { Cell } from './cell.model';
export class Enviroment{

    constructor(
        public index: number,
        public parent: Cell = null
    ){
        this.index = index;
        this.parent = parent;
    }
}