/******************************
 * IMPORTS
 ******************************/
import { Cell } from '../../cell.model';
import { Match } from '../../match_result/match.model';
import { Stuck } from '../../match_result/stuck.model';
import { Advance } from '../../match_result/advance.model';
import { MetaInformation } from '../../metaInformationModel';
export interface CellVisitor{
    
    // CELL REACT OVERLOADS
    visitReactCellMatch(element: Match, token: string, index: number): Cell[];
    visitReactCellStuck(element: Stuck, cell: Cell): Cell[];
    visitReactCellAdvance(element: Advance, metaInformation: MetaInformation): Cell[];
}