/******************************
 * IMPORTS
 ******************************/
import { Pattern } from './patterns/pattern.interface';
import { MatchResult } from './match_result/matchresult.interface';
import { MetaInformation } from './metaInformationModel';
import { CellReactVisitor } from './visitors/cells/cellReactVisitor.model';

export class Cell{
    constructor(
        public pattern: Pattern,
        public metaInformation: MetaInformation // TODO metainformation -> environment
    ){
        this.pattern = pattern;
        this.metaInformation = metaInformation;
    }

    passEnviroment(): MetaInformation{
        return this.metaInformation;
    }

    // TODO DOUBLE DISPATCH IMPLEMN.
    react(token: string, index: number = 0): Cell[]{
        const result: MatchResult = this.pattern.evaluation(token, this.metaInformation);
        // CUANDO HACE UN MATCH COMPLETO DE LA CELULA ORIGINAL
        const cellReactionVisitor: CellReactVisitor = new CellReactVisitor();
        return result.reaction(cellReactionVisitor,this,token,index);
    }
}