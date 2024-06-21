import React from 'react'
import { Link } from 'react-router-dom'
import SmIcons from './SmIcons'

function HeaderDescription({ headerData }) {
    return (
        <div className="header_main_left">
            <h1>{headerData.title}</h1>
            <p>{headerData.description}</p>
            <div className="header_btns">
                <Link to={'/услуги'}><button>Выберите подходящий расчёт</button></Link>
                <Link to={'/денежный-код'}> <button>Рассчитайте свой денежный код сейчас</button></Link>
            </div>
            <SmIcons headerData={headerData} />
        </div>
    )
}

export default HeaderDescription