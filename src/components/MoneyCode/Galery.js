import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGalery, getMoneyCodeBraclets } from '../../actions/MainActions'


function Galery() {
    const moneyBraclets = useSelector(state => state.Data.moneyBraclets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoneyCodeBraclets())
    }, [])
    return (
        <div className='num_code_img_container'>
            {
                moneyBraclets.map((data, i) => {
                    return (
                        data.images.map((data, i) => {
                            return (
                                <div className="num_code_img_card" key={i}>
                                    <img src={data.image_full_url} alt="" />
                                </div>
                            )
                        })

                    )
                })
            }

        </div>
    )
}

export default Galery