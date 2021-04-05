/******************************
 * IMPORTS
 ******************************/
import { Cell } from "../../cell.model";
import { Advance } from "../../match_result/advance.model";
import { Match } from "../../match_result/match.model";
import { Stuck } from "../../match_result/stuck.model";
import { MetaInformation } from "../../metaInformationModel";
import { CellVisitor } from "./cellVisitor.interface";

export class CellReactVisitor implements CellVisitor{

    visitReactCellMatch(element: Match, token: string, index: number): Cell[] {
        console.log(`MATCH. Symbol: ${token} ; Token Index: ${index} `);
        return [];
    }
    visitReactCellStuck(element: Stuck, cell: Cell): Cell[] {
        return [cell];
    }
    visitReactCellAdvance(element: Advance, metaInformation: MetaInformation): Cell[] {
        return [new Cell(element.pattern, metaInformation)];
    }
    
}