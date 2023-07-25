import { Figure, FigureNames } from "../Figure";
import { Colors } from "../../Colors";
import { Cell } from "../../Cell";
import imageBlack from '../../../assets/bq.png';
import imageWhite from '../../../assets/wq.png';

export class Queen extends Figure {
  constructor(color : Colors, cell : Cell) {
    super(color, cell);
    this.image = color === Colors.BLACK ? imageBlack : imageWhite;
    this.name = FigureNames.QUEEN;
  }

  canMoveTo(target: Cell): boolean {
    if(!super.canMoveTo(target)) {
      return false;
    }
    if(this.cell.isVerticalEmpty(target)) {
      return true;
    }
    if(this.cell.isHorizontalEmpty(target)) {
      return true;
    }
    return this.cell.isDiagonalEmpty(target);
  }
}