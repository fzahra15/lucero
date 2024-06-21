import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function TotalSum({jewelSum,countingSum}) {

    
    return (
        <div className="total_sum_container">
            <div className="total_sum_top">
                <p>Расчёты</p>
                <span>{countingSum}₽</span>
            </div>
            <div className="total_sum_top">
                <p>Товары</p>
                <span>{jewelSum}₽</span>
            </div>
            <div className="sum_line"></div>
            <div className="total_sum_top">
                <p>Общий</p>
                <span>{jewelSum+countingSum}</span>
            </div>
            <Link to={'/оплата'}><button>Оформить заказ</button></Link>
        </div>
    )
}

export default TotalSum