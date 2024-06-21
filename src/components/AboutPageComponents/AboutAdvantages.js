import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdvantages } from '../../actions/MainActions'
import AdvantageCard from './AdvantageCard'

function AboutAdvantages() {
    const dispatch = useDispatch()
    const advantages = useSelector(state => state.Data.advantages)
    useEffect(() => {
        dispatch(getAdvantages())
    }, [])
    return (
        <div className="grid_container_377">
            {
                advantages.map((data, i) => {
                    return (
                       <AdvantageCard key={i} data={data} />
                    )
                })
            }
        </div>
    )
}

export default AboutAdvantages