import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import basket from '../img/2205960_bag_basket_buy_cart_internet_icon 1.png'


function Nav() {
    return (
        <div className="header_top_container">
            <Logo />
            <nav>
                <ul className="header_nav">
                    <input type="checkbox" id='resp_check' />
                    <div className="nav_left">
                        <li><NavLink to="/услуги">Услуги</NavLink></li>
                        <span>/</span>
                        <li><NavLink to={'/обо-мне'}>Обо Мне</NavLink></li>
                        <li className="market"><NavLink to={'/jewelery'}>Авторская коллекция ювелирных изделий</NavLink></li>
                    </div>
                    <li><NavLink to={'/корзина'}><img src={basket} alt="" /></NavLink></li>
                    <label htmlFor="resp_check" id='respIcon'>
                        {/* <i className="fa-solid fa-xmark"></i> */}
                        <i className="fa-solid fa-bars"></i>
                    </label>
                </ul>
            </nav>
        </div>
    )
}

export default Nav