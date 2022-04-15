import React from 'react';
import { prizeMoney } from '../../../config/config';
import './Sidebar.scss';


const Sidebar = ({level: questionLevel}) => {

  return (
    <div className='sidebar-wrapper'>
        <ul className='prize-wrapper'>
            {prizeMoney.map((p) => (
            <li key={p.level} className="prize">
              <div className='serial-no'>{p.level}.</div> 
              <div className={`circle ${questionLevel > p.level ? 'active' : questionLevel === p.level ? 'current' : ''}`}></div> 
              <p>{p.prize}</p>
            </li>))}
        </ul>
    </div>
  )
}

export default Sidebar