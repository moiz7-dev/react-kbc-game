import { React, useState, useEffect } from 'react';
import { questions, totalQuizzes } from '../../../config/config';
import Image from '../image/Image';
import Modal from '../modal/Modal';
import Quiz from '../quiz/Quiz';
import Sidebar from '../sidebar/Sidebar';
import './Game.scss';

const Game = () => {

  const [level, setLevel] = useState(1);
  const [quiz, setQuiz] = useState({});
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {

    if(level > totalQuizzes) {
      alert('You have won the game. click ok to restart the game.');
      window.location.href = '/';
      return;
    }

    setQuiz( questions.find(q => q.level === level) );
  }, [level]);


  const optionSelectedHandler = (correct, optionPos) => {
    if(selectedOption !== null) return; // eliminating unnecessary clicks
    setSelectedOption(optionPos);
    setTimeout(() => {
      setIsCorrect(correct);
      //resetting values
      setTimeout(() => {
        setIsCorrect(null);
        setSelectedOption(null);
        if (correct) {
          setLevel(level => level + 1);
        } else {
          setGameOver(true);
        }
      }, 1000)
    }, 1000)
  }

  return (
    <>
      <div className='game-container'>
        <Image />
        <Sidebar level={level} />
        <Quiz quiz={quiz} onOptionSelected={optionSelectedHandler} isCorrectOption={isCorrect} selectedOption={selectedOption} />
      </div>
      {gameOver && <Modal title='Game Over!' btnLabel='Restart!' onConfirm={() => window.location = '/'} />}
    </>
  )
}

export default Game