/******************************
 * IMPORTS
 ******************************/
import { Advance } from "../../match_result/advance.model";
import { Match } from "../../match_result/match.model";
import { MatchResult } from "../../match_result/matchresult.interface";
import { Stuck } from "../../match_result/stuck.model";
import { Pattern } from "../../patterns/pattern.interface";


export interface PatternVisitor{
    visitEvaluationPatternMatch(element: Match, rightPattern: Pattern): MatchResult;
    visitEvaluationPatternStuck(element: Stuck): MatchResult;
    visitEvaluationPatternAdvance(element: Advance, rightPattern: Pattern): MatchResult;
}