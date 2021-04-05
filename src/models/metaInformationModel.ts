/******************************
 * IMPORTS
 ******************************/
import { Cell } from './cell.model';
export class MetaInformation{

    constructor(
        public index: number,
        public parent: Cell = null
    ){
        this.index = index;
        this.parent = parent;
    }
}