import { Pattern } from './pattern.interface';
import { MatchResult } from './matchresult.interface';
import { Match } from './match.model';
import { Stuck } from './stuck.model';
import { Advance } from './advance.model';
import { Enviroment } from './enviroment.model';
export class Cell{
    constructor(
        public pattern: Pattern,
        public environment: Enviroment
    ){
        this.pattern = pattern;
        this.environment = environment;
    }

    passEnviroment(): Enviroment{
        return this.environment;
    }

    // TODO DOUBLE DISPATCH IMPLEMN.
    react(token: string, index: number = 0): Cell[]{
        const result: MatchResult = this.pattern.evaluation(token, this.environment);
        // CUANDO HACE UN MATCH COMPLETO DE LA CELULA ORIGINAL
        if(result instanceof Match){
            console.log(`MATCH. Symbol: ${token} ; Token Index: ${index} `);
            return [];
        }else if(result instanceof Stuck){
            return [this];
        }else if(result instanceof Advance){
            return [new Cell(result.pattern, this.environment)];
        }
        return [];
    }
}