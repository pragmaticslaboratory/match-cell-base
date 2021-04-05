/******************************
 * IMPORTS
 ******************************/
import { MatchResult } from './matchresult.interface';
import { Cell } from '../cell.model';
import { CellVisitor } from '../visitors/cells/cellVisitor.interface';
import { Pattern } from '../patterns/pattern.interface';
import { PatternVisitor } from '../visitors/patterns/patternVisitor.interface';

export class Match implements MatchResult{
    reaction(visitor: CellVisitor, cell: Cell, token: string, index: number): Cell[]{
        return visitor.visitReactCellMatch(this,token,index);
    }
    evaluation(visitor: PatternVisitor, rightPattern: Pattern): MatchResult{
        return visitor.visitEvaluationPatternMatch(this, rightPattern);
    }
}