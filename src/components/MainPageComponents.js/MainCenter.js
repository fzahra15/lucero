import React from 'react'
import NumCategories from './NumCategories'
import MainLeft from './MainLeft'

function MainCenter() {
    return (
        <div className="main_container">
            <div className="main_left"></div>
            <div className="flex_container_main">
                <NumCategories />
                <MainLeft />
            </div>
            <div className="main_right"></div>
        </div>
    )
}

export default MainCenter