import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNumerologyInfo } from '../../actions/MainActions'

function NumerologyFirst() {
  const dispatch = useDispatch()
  const numerology = useSelector(state => state.Data.numerology)
  useEffect(() => {
    dispatch(getNumerologyInfo())
  }, [])
  return (
    <div className="container">
      <h2 className="section_header">Нумерология</h2>
      <div className="flex_container_525">
        {
          numerology.map((data, i) => {
            return (
              <div key={i} className="flex_card_525 ">
                
                <p dangerouslySetInnerHTML={{__html: data.text}} ></p>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default NumerologyFirst