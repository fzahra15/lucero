import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStateValue } from '../../redux/MainReducer'
import BracletCardView from './BracletCardView'
import img from '../img/8879686 3.png'

function BracletCard({data,braclets,setProdVisible,prodVisible}) {
    const dispatch = useDispatch()
    const handleProdViewClick = (id) => {
        setProdVisible(true)
        dispatch(changeStateValue({
            name: "viewGalleryId",
            value: id
        }))
    }
    return (
        <>
            <div className="galery_card">
                <div className="galery_grid_img">
                    <img src={img} alt="" />
                </div>
                <div className="card_content">
                    <h4>{data.title}</h4>
                </div>
                <div className="prod_circle prod_circle_white">
                    <svg onClick={()=> handleProdViewClick(data.id)} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="#c90">
                        <path
                            d="M0.499936 12.5174C0.499935 12.7935 0.723793 13.0174 0.999935 13.0174L5.49994 13.0174C5.77608 13.0174 5.99994 12.7935 5.99994 12.5174C5.99994 12.2413 5.77608 12.0174 5.49994 12.0174L1.49994 12.0174L1.49994 8.0174C1.49994 7.74125 1.27608 7.5174 0.999936 7.5174C0.723794 7.5174 0.499936 7.74125 0.499936 8.0174L0.499936 12.5174ZM5.44405 7.36617L0.646382 12.1638L1.35349 12.871L6.15116 8.07328L5.44405 7.36617Z"
                            fill="white" />
                        <path
                            d="M13.0137 1.00018C13.0137 0.724038 12.7899 0.50018 12.5137 0.500181L8.01374 0.50018C7.73759 0.50018 7.51374 0.724038 7.51374 1.00018C7.51374 1.27632 7.73759 1.50018 8.01374 1.50018H12.0137L12.0137 5.50018C12.0137 5.77632 12.2376 6.00018 12.5137 6.00018C12.7899 6.00018 13.0137 5.77632 13.0137 5.50018L13.0137 1.00018ZM8.06962 6.1514L12.8673 1.35373L12.1602 0.646627L7.36251 5.4443L8.06962 6.1514Z"
                            fill="white" />
                    </svg>
                </div>
            </div>
            {
                prodVisible == true? <BracletCardView braclets={braclets} setProdVisible={setProdVisible} />:null
            }
        </>
    )
}

export default BracletCard