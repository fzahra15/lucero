import React from 'react'

function NumCard({ data }) {
    return (

        <div className="number_card">
            <h3>{data.num}</h3>
            <h2 className=''>{data.title}</h2>


            {
                data.description.map((x, i) => {
                    return (
                        <p key={i}>{x}</p>
                    )
                })
            }
            <h4>Особенности:</h4>
            <ul style={{ listStyle: 'initial' }}>
                {
                    data.properties.map((y, i) => {
                        return (
                            <li style={{ fontSize: '16px', marginLeft: '15px' }} key={i}>{y}</li>
                        )
                    })
                }
            </ul>


        </div>
    )
}

export default NumCard