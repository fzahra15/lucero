import React, { useState } from 'react'
import NumCard from './NumCard'

function AnswNumContainer({answerArray}) {

    return (
        <div className="numbers_container">
            {
                answerArray.map((data,i)=>{
                    return(
                        <NumCard key={i} data={data}/>
                    )
                })
            }
        </div>
    )
}

export default AnswNumContainer