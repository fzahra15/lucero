import React from 'react'
import { Link } from 'react-router-dom'

function UsloviyaOferti({ isCheckedOffer, handleCheckboxChangeOffer }) {
    return (
        <div className='uslovieUsluq'>
            <input type="checkbox" checked={isCheckedOffer} onChange={handleCheckboxChangeOffer} />
            <p>Я согласен с <Link to={'/оферта'}>условиями публичной оферты</Link> </p>
        </div>
    )
}

export default UsloviyaOferti