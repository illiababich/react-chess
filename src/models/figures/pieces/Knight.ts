import { Figure, FigureNames } from "../Figure";
import { Colors } from "../../Colors";
import { Cell } from "../../Cell";
import imageBlack from '../../../assets/bn.png';
import imageWhite from '../../../assets/wn.png';

export class Knight extends Figure {
  constructor(color : Colors, cell : Cell) {
    super(color, cell);
    this.image = color === Colors.BLACK ? imageBlack : imageWhite;
    this.name = FigureNames.KNIGHT;
  }

  canMoveTo(target: Cell): boolean {
    if(!super.canMoveTo(target)) {
      return false;
    }
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}