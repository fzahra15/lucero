import React from 'react'
import insta from '../img/instagram 1.svg'
import telegram from "../img/telegram.png"
import wp from "../img/whatsapp 1.png"

function SmIcons({headerData}) {
  return (
    <div className="sm_container">
      <div className="sm_circle">
        <a href={headerData.instagram} target='_blank'>
          <img src={insta} alt=""/>
        </a>
      </div>
      <div className="sm_circle">
        <a href={headerData.linkedin} target='_blank'>
          <img src={telegram} alt=""/>
        </a>
      </div>
      <div className="sm_circle">
        <a target='_blank' href={headerData.whatsapp}>
          <img src={wp} alt=""/>
        </a>
      </div>
    </div>
  )
}

export default SmIcons