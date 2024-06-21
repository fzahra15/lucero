import React from 'react'
import img1 from './img/оферта1.png'
import img2 from './img/оферта2.png'
import img3 from './img/оферта3.png'

function Offerta() {
    return (
        <div  className='oferta'>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
        </div>
    )
}

export default Offerta