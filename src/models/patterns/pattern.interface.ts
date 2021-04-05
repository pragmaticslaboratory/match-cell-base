/******************************
 * IMPORTS
 ******************************/
import { MatchResult } from '../match_result/matchresult.interface';
export interface Pattern{
    evaluation(token: string, environment: any): MatchResult;
}