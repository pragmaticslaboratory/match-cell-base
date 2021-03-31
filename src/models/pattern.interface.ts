import { MatchResult } from './matchresult.interface';
export interface Pattern{
    evaluation(token: string, environment: any): MatchResult;
}