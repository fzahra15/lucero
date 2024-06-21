import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCase } from '../../actions/MainActions'
import CaseCard from './CaseCard'

function Cases() {
    const myCase = useSelector(state => state.Data.case)
    const dispatch = useDispatch()
    const [prodVisible, setProdVisible] = useState(false)
    useEffect(() => {
        dispatch(getCase())
    }, [])

    return (
        <div className="galery_container">
            {
                myCase.map((data, i) => {
                    return (
                        <CaseCard data={data} key={i} prodVisible={prodVisible} setProdVisible={setProdVisible} />
                    )
                })
            }
        </div>
    )
}

export default Cases