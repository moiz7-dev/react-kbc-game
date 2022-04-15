import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import Game from './components/game/Game';

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      <div className={`container ${start ? 'game-started' : ''}`}>
        <button onClick={() => setStart(true)} className='container__button'>START!</button>
      </div>

      {start && <Game />}
    </>
  )
}

export default App
