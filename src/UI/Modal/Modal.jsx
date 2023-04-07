import React from 'react'
import "./Modal.css"
const Modal = ({ visible, setVisible, children }) => {
    return (
        <div className='modalContainer' onClick={e => setVisible(!visible)}>
            <div className="modalBody" onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal