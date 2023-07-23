import React, { FC, useEffect, useState } from 'react';
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function selectCell(cell : Cell) {
    console.log(cell)
    if (selectedCell?.figure) {
      if (selectedCell !== cell) {
        if (selectedCell.figure?.moveTo(cell)) {
          selectedCell.movePiece(cell);
          setSelectedCell(null);
        } else {
          setSelectedCell(cell);
        }
      } else {
        setSelectedCell(null);
      }
    } else {
      setSelectedCell(cell);
    }
    // if(cell.figure) {
    //   setSelectedCell(cell);
    //   console.log("changed color")
    // }
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
  );
};

export default BoardComponent;