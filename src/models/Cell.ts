import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";
import { Board } from "./Board";

export class Cell {
  x: number;
  y: number;
  color: Colors;
  figure: Figure | null;
  board: Board;
  isAvailableForMove: boolean;
  id: number;

  constructor(x: number, y: number, color: Colors, board: Board, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.isAvailableForMove = false;
    this.id = Math.random();
  }

  isEmpty(): boolean {
    return this.figure === null;
  }

  isEnemy(target: Cell): boolean {
    if (target.figure) {
      return this.figure?.color !== target.figure.color;
    }
    return false;
  }

  isHorizontalEmpty(target: Cell): boolean {
    if (this.y !== target.y) {
      return false;
    }

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);
    for (let x = min + 1; x < max; x++) {
      if(!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isVerticalEmpty(target: Cell): boolean {
    if(this.x !== target.x) {
      return false;
    }

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let i = min + 1; i < max; i++) {
      if(!this.board.getCell(this.x, i).isEmpty()) {
        return false;
      }
    }

    return true;
  }

  isDiagonalEmpty(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);
    if(absY !== absX)
      return false;

    const dy = this.y < target.y ? 1 : -1;
    const dx = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if(!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty())
        return false;
    }
    return true;
  }

  setPiece(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }

  movePiece(target: Cell) {
    if(this.figure && this.figure?.canMoveTo(target)) {
      this.figure.movePiece(target);
      target.setPiece(this.figure);
      this.figure = null;
    }
  }
}