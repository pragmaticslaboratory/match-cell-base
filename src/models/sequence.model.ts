import { MatchResult } from './matchresult.interface';
import { Pattern } from './pattern.interface';
import { Advance } from './advance.model';
import { Match } from './match.model';
import { Stuck } from './stuck.model';
export class Sequence implements Pattern{
    constructor(
        public left: Pattern,
        public right: Pattern
    ){
        this.left = left;
        this.right = right;
    }

    evaluation(token: string, environment: any): MatchResult{
        const result: MatchResult = this.left.evaluation(token, environment);
        if(result instanceof Advance){
            // SOLO SI ES ADVANCE PODRA OBTENER EL PATTERN
            return new Advance(new Sequence(result.pattern, this.right))
        }else if(result instanceof Match){
            return new Advance(this.right);
        }else{
            return new Stuck();
        }
    }
    
    public toString = () : string => {
        return ` ${this.left} -> ${this.right} `;
    }
}