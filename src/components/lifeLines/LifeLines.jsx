import React, { useState } from 'react';
import './LifeLines.scss';  

const LifeLines = ({quizOptions, setTwoRandomOption, selectedOption}) => {
    const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);

    const onFiftyFifty = () => {
        setUsedFiftyFifty(true);
        const correctAnswerIndex = quizOptions.findIndex(op => op.correct);
        let firstRandomNumber = Math.floor(Math.random() * 4);
        let secondRandomNumber = Math.floor(Math.random() * 4);
        while (firstRandomNumber === secondRandomNumber || firstRandomNumber === correctAnswerIndex) {
            firstRandomNumber = Math.floor(Math.random() * 4);
        }
        while (firstRandomNumber === secondRandomNumber || secondRandomNumber === correctAnswerIndex) {
            secondRandomNumber = Math.floor(Math.random() * 4);
        }
        setTwoRandomOption([firstRandomNumber, secondRandomNumber]);
    }

    return (
        <div className="lifeline-wrapper" style={{pointerEvents: selectedOption !== null ? 'none' : ''}}> {/* eliminating unnecessary clicks */}
            <div className={`lifeline ${usedFiftyFifty ? 'disabled' : ''}`} onClick={() => onFiftyFifty()}>
                50-50
            </div>
            <div className="lifeline coming-soon">
                coming <br /> soon
            </div>
            <div className="lifeline coming-soon">
                coming <br /> soon
            </div>
        </div>
    )
}

export default LifeLines