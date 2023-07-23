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

  // moveTo(target: Cell): boolean {
  //   if (!super.moveTo(target)) {
  //     return false;
  //   }
  //   if(this.cell.isVerticalEmpty(target)) {
  //     return true;
  //   }
  //   return false;
  // }
}