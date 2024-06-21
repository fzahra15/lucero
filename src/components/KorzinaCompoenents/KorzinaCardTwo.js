import React from 'react'
import img from '../img/trash-can-regular 3.png'
import logoMain from '../img/LogoAbout.png'


function KorzinaCardTwo({ data, handleRemoveFromCart,changeCount }) {
    return (
        <div className="card_prod_2">
            <div className="card_prod_left">
                <img src={logoMain} alt="" />
                <div classNameName="card_main">
                    <div classNameName="card_prod_left_text">
                        <h4>{data.title}</h4>
                        <p>Итоговая цена: <span>{data.price*data.count}</span></p>
                    </div>
                    <div className="counter counter_two">
                        <button onClick={() => changeCount('dec', data)}>-</button>
                        <span>{data.count}</span>
                        <button onClick={() => changeCount('inc', data)}>+</button>
                    </div>
                </div>

            </div>
            <img onClick={() => handleRemoveFromCart(data.id)} src={img} alt="" />
        </div>
    )
}

export default KorzinaCardTwo