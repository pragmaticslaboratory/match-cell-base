/******************************
 * IMPORTS
 ******************************/
import { MatchResult } from '../match_result/matchresult.interface';
import { Pattern } from './pattern.interface';
import { MetaInformation } from '../metaInformationModel';
import { PatternResultVisitor } from '../visitors/patterns/patternResultVisitor.model';

export class Sequence implements Pattern{
    constructor(
        public left: Pattern,
        public right: Pattern
    ){
        this.left = left;
        this.right = right;
    }

    evaluation(token: string, environment: MetaInformation): MatchResult{
        const result: MatchResult = this.left.evaluation(token, environment);
        const patternVisitor: PatternResultVisitor = new PatternResultVisitor();
        return result.evaluation(patternVisitor, this.right);
    }
    
    public toString = () : string => {
        return ` ${this.left} -> ${this.right} `;
    }
}