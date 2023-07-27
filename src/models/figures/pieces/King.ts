import { Figure, FigureNames } from "../Figure";
import { Colors } from "../../Colors";
import { Cell } from "../../Cell";
import imageBlack from '../../../assets/bk.png';
import imageWhite from '../../../assets/wk.png';

export class King extends Figure {

  isFirstMove: boolean = true;

  constructor(color : Colors, cell : Cell) {
    super(color, cell);
    this.image = color === Colors.BLACK ? imageBlack : imageWhite;
    this.name = FigureNames.KING;
  }

  canMoveTo(target: Cell): boolean {
    if(!super.canMoveTo(target)) {
      return false;
    }
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 1) || (dx === 0 && dy === 1) || (dx === 1 && dy === 0);
  }

  movePiece(target: Cell) {
    super.movePiece(target);
    this.isFirstMove = false;
  }
}