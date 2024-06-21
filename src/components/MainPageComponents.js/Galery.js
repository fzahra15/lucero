import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGalery } from '../../actions/MainActions'
import GaleryCard from './GaleryCard'

function Galery() {
  const gallery = useSelector(state => state.Data.gallery)
  const [prodVisible, setProdVisible] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGalery())
  }, [])
  return (<>
    <div className="galery_container">
      {
        gallery.map((data, i) => {
          return (
            <GaleryCard gallery={gallery} prodVisible={prodVisible} setProdVisible={setProdVisible} key={i} data={data} />
          )
        })
      }
    </div>
  </>
  )
}

export default Galery