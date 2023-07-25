import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Queen } from "./figures/pieces/Queen";
import { King } from "./figures/pieces/King";
import { Pawn } from "./figures/pieces/Pawn";
import { Rook } from "./figures/pieces/Rook";
import { Knight } from "./figures/pieces/Knight";
import { Bishop } from "./figures/pieces/Bishop";

export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if((i + j) % 2 !== 0) {
          row.push(new Cell(j, i, Colors.BLACK, this, null))
        } else {
          row.push(new Cell(j, i, Colors.WHITE, this, null))
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x : number, y: number) {
    return this.cells[y][x];
  }

  public highlightAvailableCells(selectedCell: Cell | null) {
    // Reset the isAvailableForMove property for all cells to false
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.isAvailableForMove = false;
      }
    }

    // Highlight the new available moves for the selected piece
    if (selectedCell) {
      for (let i = 0; i < this.cells.length; i++) {
        const row = this.cells[i];
        for (let j = 0; j < row.length; j++) {
          const target = row[j];
          target.isAvailableForMove = !!selectedCell?.figure?.canMoveTo(target);
        }
      }
    }
  }

  public getCopyOfBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }

  private placePawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private placeRooks() {
    for (let i = 0; i < 2; i++) {
      new Rook(Colors.BLACK, this.getCell(i * 7, 0));
      new Rook(Colors.WHITE, this.getCell(i * 7, 7));
    }
  }

  private placeKnights() {
    for (let i = 0; i < 2; i++) {
      new Knight(Colors.BLACK, this.getCell((i * 5) + 1, 0));
      new Knight(Colors.WHITE, this.getCell((i * 5) + 1, 7));
    }
  }

  private placeBishops() {
    for (let i = 0; i < 2; i++) {
      new Bishop(Colors.BLACK, this.getCell(((i * 3) + 2), 0));
      new Bishop(Colors.WHITE, this.getCell(((i * 3) + 2), 7));
    }
  }

  private placeQueens() {
    new Queen(Colors.WHITE, this.getCell(3, 7));
    new Queen(Colors.BLACK, this.getCell(3, 0));
  }

  private placeKings() {
    new King(Colors.WHITE, this.getCell(4, 7));
    new King(Colors.BLACK, this.getCell(4, 0));
  }

  public placeFigures() {
    this.placeBishops();
    this.placeKings();
    this.placeQueens();
    this.placePawns();
    this.placeKnights();
    this.placeRooks();
  }
}