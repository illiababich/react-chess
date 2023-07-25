import { Figure, FigureNames } from "../Figure";
import { Colors } from "../../Colors";
import { Cell } from "../../Cell";
import imageBlack from '../../../assets/bb.png';
import imageWhite from '../../../assets/wb.png';

export class Bishop extends Figure {
  constructor(color : Colors, cell : Cell) {
    super(color, cell);
    this.image = color === Colors.BLACK ? imageBlack : imageWhite;
    this.name = FigureNames.BISHOP;
  }

  canMoveTo(target: Cell): boolean {
    if (!super.canMoveTo(target)) {
      return false;
    }
    return this.cell.isDiagonalEmpty(target);
  }
}