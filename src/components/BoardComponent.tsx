import React, { FC, useEffect, useState } from 'react';
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import TimerComponent from "./TimerComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  nextTurn: () => void;
  resetBoard: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, nextTurn, resetBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function selectCell(cell : Cell) {
    console.log(cell)
    if (selectedCell?.figure) {
      if (selectedCell !== cell) {
        setSelectedCell(cell);
        if (selectedCell.figure?.canMoveTo(cell)) {
          selectedCell.movePiece(cell);
          nextTurn();
          setSelectedCell(null);
        }
      } else {
        setSelectedCell(null);
      }
    } else {
      if(cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    highlightAvailableCells();
  }, [selectedCell]);

  function highlightAvailableCells() {
    board.highlightAvailableCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyOfBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      <TimerComponent currentPlayer={currentPlayer} restartTheGame={resetBoard}/>
      <h2>Turn of: {currentPlayer?.color}</h2>
      <div className={"board"}>
        {board.cells.map((row, index) =>
          <React.Fragment key={index}>
            {row.map(cell =>
              <CellComponent
                cell={cell}
                isSelected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                selectCell={selectCell}
                key={cell.id}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default BoardComponent;