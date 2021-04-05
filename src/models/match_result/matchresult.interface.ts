/******************************
 * IMPORTS
 ******************************/
 import { Cell } from '../cell.model';
import { CellVisitor } from '../visitors/cells/cellVisitor.interface';
import { Pattern } from '../patterns/pattern.interface';
import { PatternVisitor } from '../visitors/patterns/patternVisitor.interface';
export interface MatchResult{
    reaction(visitor: CellVisitor, cell: Cell, token: string, index: number): Cell[];
    evaluation(visitor: PatternVisitor, rightPattern: Pattern): MatchResult;
}