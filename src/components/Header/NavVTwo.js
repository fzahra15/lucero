import React from 'react'
import logoAbout from '../img/LogoAbout.png'
import { Link, NavLink } from 'react-router-dom'
import basket from '../img/aboutBasket.png'

function NavVTwo() {
    return (
        <div className="header_top_container">
            <div className="logo">
                <Link to={'/'}><img src={logoAbout} alt="" /></Link>
            </div>
            <nav>
                <ul className="header_nav header_nav_about">
                    <input type="checkbox" id='resp_check' />
                    <div className="nav_left">
                        <li><Link to="/услуги">Услуги</Link></li>
                        <span>/</span>
                        <li><Link to="/обо-мне">Обо Мне</Link></li>
                        <li className='market_ab'><Link to="/jewelery">Авторская коллекция ювелирных изделий</Link></li>
                    </div>
                    <li><Link to={'/корзина'}><img src={basket} alt="" /></Link> </li>
                    <label htmlFor="resp_check" id='respIcon'>
                        <i className="fa-solid fa-bars" style={{color:'#c90'}}></i>
                    </label>
                </ul>
            </nav>
        </div>
    )
}

export default NavVTwo