import React from 'react'

function HeaderRightImg({headerData}) {
    return (
        <div className="header_main_right">
            <img src={headerData.image_full_url} alt=""/>
        </div>
    )
}

export default HeaderRightImg