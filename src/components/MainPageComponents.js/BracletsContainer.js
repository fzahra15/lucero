import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBraclets } from '../../actions/MainActions'
import BracletCard from './BracletCard'

function BracletsContainer() {
    const braclets = useSelector(state => state.Data.braclets)
    const [prodVisible, setProdVisible] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBraclets())
    },[])
  return (
    <div className='galery_container'>
        {
            braclets.map((data,i)=>{
                return(
                    <BracletCard braclets={braclets} setProdVisible={setProdVisible} prodVisible={prodVisible} key={i} data={data} />
                )
            })
        }
    </div>
  )
}

export default BracletsContainer