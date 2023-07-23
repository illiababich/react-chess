import React, { FC } from 'react';
import { Cell } from "../models/Cell";

interface CellProps{
  cell: Cell;
  isSelected: boolean;
  selectCell: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, isSelected, selectCell}) => {
  return (
    <div className={["cell", cell.color, isSelected ? "selected-cell" : ""].join(' ')}
         onClick={() => selectCell(cell)}
         style={{background: cell.isCellEmpty && cell.figure ? "darkseagreen" : ''}}
    >
      {cell.isCellEmpty && !cell.figure && <div className={"available-cell"}/>}
      {cell.figure?.image && <img src={cell.figure.image}  alt={cell.figure.name}/>}
    </div>
  );
};

export default CellComponent;