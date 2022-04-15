import React from 'react';
import ReactDom from 'react-dom';
import './Modal.scss';

const Modal = ({ title, onConfirm, btnLabel }) => {

    return ReactDom.createPortal(
        <>
            <div className="backdrop"></div>
            <div className='modal-wrapper'>
                <h1 className='header'>{title}</h1>
                <div className="body">
                <button onClick={() => onConfirm()}>{btnLabel}</button>
                </div>
            </div>
        </>,
        document.getElementById('modal')
    )
}

export default Modal