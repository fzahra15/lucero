import React from 'react'
import CountingCard from './CountingCard'

function Counting({counting,updateLocalStorage}) {
    const filteredCountings = counting.filter(data => data.id != 17) 
    return (
        <div className="drop_down_container">
            {
                filteredCountings.map((data,i)=>{
                    return(
                        <CountingCard updateLocalStorage={updateLocalStorage} data={data} key={i} />
                    )
                })
            }
        </div>
    )
}

export default Counting