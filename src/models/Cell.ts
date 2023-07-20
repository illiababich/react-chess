import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";
import { Board } from "./Board";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  isCellEmpty: boolean;
  id: number;

  constructor(x: number, y: number, color: Colors, board: Board, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.isCellEmpty = false;
    this.id = Math.random();
  }
}