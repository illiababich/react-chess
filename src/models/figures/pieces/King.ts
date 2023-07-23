import { Figure, FigureNames } from "../Figure";
import { Colors } from "../../Colors";
import { Cell } from "../../Cell";
import imageBlack from '../../../assets/bk.png';
import imageWhite from '../../../assets/wk.png';

export class King extends Figure {
  constructor(color : Colors, cell : Cell) {
    super(color, cell);
    this.image = color === Colors.BLACK ? imageBlack : imageWhite;
    this.name = FigureNames.KING;
  }

  moveTo(target: Cell): boolean {
    if (!super.moveTo(target)) {
      return false;
    }
    return true;
  }
}