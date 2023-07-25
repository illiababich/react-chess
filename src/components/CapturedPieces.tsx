import React, { FC } from 'react';
import { Figure } from "../models/figures/Figure";

interface CapturedPieces {
  title: string;
  pieces: Figure[];
}

const CapturedPieces: FC<CapturedPieces> = ({title, pieces}) => {
  return (
    <div className={"captured"}>
      <h3>{title}</h3>
      {pieces.map(piece =>
        <div key={piece.id}>
          {piece.name} {piece.image && <img width={20} height={20} src={piece.image} alt={piece.image}/>}
        </div>
      )}
    </div>);
};

export default CapturedPieces;