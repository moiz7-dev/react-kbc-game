import React, { useEffect, useState, useRef } from 'react';
import LifeLines from '../lifeLines/LifeLines';
import './Quiz.scss';

const Quiz = ({ quiz, onOptionSelected, selectedOption, isCorrectOption }) => {

  const [twoRandomOption, setTwoRandomOption] = useState(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    setTwoRandomOption(null);
  }, [quiz?.question]);

  return (
    <div className='quiz-wrapper'>

      <div className="question-wrapper">
        {quiz?.question}
      </div>

      <ol className="options-wrapper" ref={optionsRef}>
        {quiz?.options?.map((o, i) => <li key={i} className={`option ${selectedOption === i && (isCorrectOption === null ? 'selected' :
          isCorrectOption ? 'correct' : 'incorrect')} ${twoRandomOption !== null && ((twoRandomOption[0] === i || twoRandomOption[1] === i) ? 'disabled' : '') }`}
          onClick={() => onOptionSelected(o.correct, i)}>{o.option}</li>)}
      </ol>

      <LifeLines quizOptions={quiz?.options} setTwoRandomOption={setTwoRandomOption} selectedOption={selectedOption} />
      
    </div>
  )
}

export default Quiz