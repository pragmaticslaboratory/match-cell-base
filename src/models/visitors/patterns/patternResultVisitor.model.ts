/******************************
 * IMPORTS
 ******************************/
import { Advance } from '../../match_result/advance.model';
import { Match } from '../../match_result/match.model';
import { MatchResult } from '../../match_result/matchresult.interface';
import { Stuck } from '../../match_result/stuck.model';
import { Pattern } from '../../patterns/pattern.interface';
import { Sequence } from '../../patterns/sequence.model';
import { PatternVisitor } from './patternVisitor.interface';
export class PatternResultVisitor implements PatternVisitor{
    visitEvaluationPatternMatch(element: Match, rightPattern: Pattern): MatchResult {
        return new Advance(rightPattern);
    }
    visitEvaluationPatternStuck(element: Stuck): MatchResult {
        return new Stuck();
    }
    visitEvaluationPatternAdvance(element: Advance, rightPattern: Pattern): MatchResult {
        return new Advance(new Sequence(element.pattern, rightPattern));
    }

}