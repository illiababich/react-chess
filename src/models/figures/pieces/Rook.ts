import { Figure, FigureNames } from "../Figure";
import { Colors } from "../../Colors";
import { Cell } from "../../Cell";
import imageBlack from '../../../assets/br.png';
import imageWhite from '../../../assets/wr.png';

export class Rook extends Figure {
  constructor(color : Colors, cell : Cell) {
    super(color, cell);
    this.image = color === Colors.BLACK ? imageBlack : imageWhite;
    this.name = FigureNames.ROOK;
  }

  canMoveTo(target: Cell): boolean {
    if(!super.canMoveTo(target)) {
      return false;
    }
    if(this.cell.isVerticalEmpty(target)) {
      return true;
    }
    return this.cell.isHorizontalEmpty(target);
  }
}