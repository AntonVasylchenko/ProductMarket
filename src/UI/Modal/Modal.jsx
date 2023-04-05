import React from 'react'
import "./Modal.css"
const Modal = ({ visible, setVisible, children }) => {
    return (
        <div  onClick={event => setVisible(false)} className='modalContainer'>
            <div className="modalBody" onClick={event => event.stopPropagation}>
                {children}
            </div>
        </div>
    )
}

export default Modal