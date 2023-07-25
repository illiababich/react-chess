import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimerProps {
  currentPlayer: Player | null;
  restartTheGame: () => void;
}

const TimerComponent:FC<TimerProps> = ({currentPlayer, restartTheGame}) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if(timer.current) {
      clearInterval(timer.current);
    }

    timer.current = setInterval(() =>
      currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer() : decrementBlackTimer(), 1000);
   }

  function decrementBlackTimer() {
    setBlackTime(prevState => prevState - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime(prevState => prevState - 1);
  }

  const handleRestart = () => {
    setWhiteTime(300);
    setBlackTime(300);
    restartTheGame();
  }

  useState()
  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart the game</button>
      </div>
      <h2>Black's time: {blackTime}</h2>
      <h2>White's time: {whiteTime}</h2>
    </div>);
};

export default TimerComponent;