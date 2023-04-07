import React from 'react'
import s from "./button.module.css"

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className={s.button}>{children}</button>
    )
}

export default Button