import React from 'react'

function DescriptionCard({data}) {
    return (
        <div className="description_card">
            <h3>{data.row}</h3>
            <p>{data.title}</p>
        </div>
    )
}

export default DescriptionCard