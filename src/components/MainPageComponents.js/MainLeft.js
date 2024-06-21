import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo } from '../../actions/MainActions'

function MainLeft() {
    const dispatch = useDispatch()
    const info = useSelector(state => state.Data.info)
    useEffect(() => {
        dispatch(getInfo())
    }, [])
    return (
        <div className="flex_container_right">
            <div className="flex_right_img">
                <img src={info.image_full_url} alt="" />
            </div>
            <p>{info.description}</p>
        </div>
    )
}

export default MainLeft