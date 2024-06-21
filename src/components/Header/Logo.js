import React from 'react'
import { Link } from 'react-router-dom'
import logoMain from '../img/Layer_1 (3).png'

function Logo() {
    return (
        <Link to={'/'} className="logo">
            <img src={logoMain} alt="" />
        </Link>
    )
}

export default Logo