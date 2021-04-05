/******************************
 * IMPORTS
 ******************************/
import { Pattern } from './pattern.interface';
import { Match } from '../match_result/match.model';
import { Stuck } from '../match_result/stuck.model';
import { MatchResult } from '../match_result/matchresult.interface';
export class Symbol implements Pattern{
    constructor(
        public _pattern: string
    ){
        this._pattern = _pattern;
    }

    /**
     * Compara el patron del simbolo con el token enviado (char)
     * @param token char
     * @param environment ?
     * @returns si existe coincidencia match y stuck
     */
    evaluation(token: string, environment: any): MatchResult{
        return token === this._pattern ? new Match() : new Stuck();
    }
    
    public toString = () : string => {
        return `${this._pattern}`;
    }
    
}