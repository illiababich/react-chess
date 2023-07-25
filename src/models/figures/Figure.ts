import { Colors } from "../Colors";
import image from "../../assets/bp.png"
import { Cell } from "../Cell";

export enum FigureNames {
  FIGURE = "FIGURE",
  KING = "KING",
  QUEEN = "QUEEN",
  PAWN = "PAWN",
  ROOK = "ROOK",
  KNIGHT = "KNIGHT",
  BISHOP = "BISHOP"
}

export class Figure {
  color: Colors;
  image: typeof image | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.image = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMoveTo(target: Cell) : boolean {
    console.log('highlighted');
    if(target.figure?.color === this.color)
      return false;
    return target.figure?.name !== FigureNames.KING;
  }

  movePiece(target : Cell) {

  }
}