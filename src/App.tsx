import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import CapturedPieces from "./components/CapturedPieces";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    resetBoard();
    setCurrentPlayer(whitePlayer);
  }, [])

  function resetBoard() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.placeFigures();
    setBoard(newBoard);
  }

  function nextTurn() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <div className={"app"}>
      <BoardComponent
      board={board}
      setBoard={setBoard}
      currentPlayer={currentPlayer}
      nextTurn={nextTurn}
      resetBoard={resetBoard}
      />
      <div>
        <CapturedPieces title={"Captured white pieces"} pieces={board.capturedWhitePieces}/>
        <CapturedPieces title={"Captured black pieces"} pieces={board.capturedBlackPieces}/>
      </div>
    </div>
  );
}

export default App;