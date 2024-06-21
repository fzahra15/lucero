import React, { useEffect } from 'react'
import Counting from '../components/CountingsComponents/Counting'
import { useDispatch, useSelector } from 'react-redux'
import { getCounting } from '../actions/MainActions'

function Usluqi({updateLocalStorage,counting}) {
    return (
        <main>
            <div className="container">
                <h2 className="section_header">Виды Расчетов</h2>
                <Counting updateLocalStorage={updateLocalStorage} counting={counting} />
            </div>
        </main>

    )
}

export default Usluqi