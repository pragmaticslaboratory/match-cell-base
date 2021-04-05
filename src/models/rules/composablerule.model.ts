/******************************
 * IMPORTS
 ******************************/
import { Cell } from '../cell.model';
import { Rule } from './rule.interface';
import { Pattern } from '../patterns/pattern.interface';
export abstract class ComposableRule implements Rule {
    protected children: Rule[] = [];
    
    constructor(){
        this.children = [];
    }
    
    add(rule: Rule):void {
        this.children.push(rule);
    }
    
    apply(cells: Cell[], pattern: Pattern): Cell[]{
        // CREAR COPIA DE LAS CELULAS
        let cellList: Cell[] = cells;
        // ITERAMOS POR CADA REGLA
        this.children.forEach(child => {
            cellList = child.apply(cellList,pattern);
        });
        return cellList;
    }
}