import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo, getNumCategories } from '../../actions/MainActions'
import DescriptionCard from './descriptionCard'

function NumCategories() {
    const dispatch = useDispatch()
    const numCategories = useSelector(state => state.Data.numCategories)

    useEffect(() => {
        dispatch(getNumCategories())
    }, [])
    return (
        <div className="flex_container_left">
            {
                numCategories.map((data, i) => {
                    return (
                     <DescriptionCard key={i} data={data} />
                    )
                })
            }
            <div className="desc_card_type_2">
                <p>В своих расчетах я использую синтез систем и методов: <span>
                    «Идеал» Н.А. Сидоровой. <br></br> ТМС Н.В. Яницкой <br></br> Метод прогнозирования в нумерологии<br></br> Собственные наработки
                </span></p>
            </div>
        </div>
    )
}

export default NumCategories