/******************************
 * IMPORTS
 ******************************/
import { MatchResult } from './matchresult.interface';
import { Pattern } from '../patterns/pattern.interface';
import { CellVisitor } from '../visitors/cells/cellVisitor.interface';
import { Cell } from '../cell.model';
import { PatternVisitor } from '../visitors/patterns/patternVisitor.interface';

export class Advance implements MatchResult{

    constructor(
        public pattern: Pattern
    ){
        this.pattern = pattern;
    }

    reaction(visitor: CellVisitor, cell: Cell, token: string, index: number): Cell[]{
        return visitor.visitReactCellAdvance(this, cell.passEnviroment());
    }

    evaluation(visitor: PatternVisitor, rightPattern: Pattern): MatchResult{
        return visitor.visitEvaluationPatternAdvance(this, rightPattern);
    }
}