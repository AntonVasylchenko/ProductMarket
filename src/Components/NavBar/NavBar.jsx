import React from 'react'
import "./NavBar.css"
import { NavLink } from "react-router-dom";


const NavBar = ({ categories }) => {
    let lis = categories.map(el => {
        return <li className='nav-item' key={el}>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={el}>{el}</NavLink>
        </li>
    })
    return (
        <ul className='nav-list'>
            <li className='nav-item'>
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/cart">Cart</NavLink>
            </li>
            {lis}
        </ul>
    )
}

export default NavBar