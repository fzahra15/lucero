import React, { useEffect } from 'react'
import Nav from './Nav'
import HeaderDescription from './HeaderDescription'
import HeaderRightImg from './HeaderRightImg'
import { useDispatch, useSelector } from 'react-redux'
import { getHeaderData } from '../../actions/MainActions'

function Header() {
    const headerData = useSelector(state => state.Data.headerData)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getHeaderData())
    },[])
    return (
        <header>
            <div className="shadow">
                <Nav />
                <div className="header_main_container">
                    <HeaderDescription headerData={headerData} />
                    <HeaderRightImg headerData={headerData} />
                </div>
            </div>

        </header>
    )
}

export default Header