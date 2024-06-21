import React from 'react'

function AdvantageCard({data}) {
    return (
        <div  className="grid_card">
            <div className="grid_card_img">
                <img src={data.image_full_url} alt="" />
            </div>
            <p>{data.title}</p>
        </div>
    )
}

export default AdvantageCard