import { Cell } from "./cell.model";

export interface Evolution{
    evolve(cells: Cell[], token: string, idx: number): Cell[];
}