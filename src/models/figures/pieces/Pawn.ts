import { Figure, FigureNames } from "../Figure";
import { Colors } from "../../Colors";
import { Cell } from "../../Cell";
import imageBlack from '../../../assets/bp.png';
import imageWhite from '../../../assets/wp.png';

export class Pawn extends Figure {

  isFirstMove: boolean = true;

  constructor(color : Colors, cell : Cell) {
    super(color, cell);
    this.image = color === Colors.BLACK ? imageBlack : imageWhite;
    this.name = FigureNames.PAWN;
  }

  canMoveTo(target: Cell): boolean {
    if (!super.canMoveTo(target)) {
      return false;
    }
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : - 1;
    const firstStepDirection = direction * 2;

    if (((target.y === this.cell.y + direction)
        || (this.isFirstMove && (target.y === this.cell.y + firstStepDirection)))
        && target.x === this.cell.x) {
      return true;
    }

    return target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target);
  }

  movePiece(target: Cell) {
    super.movePiece(target);
    this.isFirstMove = false;
  }
}