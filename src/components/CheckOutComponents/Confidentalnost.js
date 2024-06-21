import React from 'react'
import { Link } from 'react-router-dom'

function Confidentalnost({ handleCheckboxChange, isChecked }) {
    return (
        <div className='confidentalnost'>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Я согласен с условиями
            </label>
            <p></p>
        </div>


    )
}

export default Confidentalnost