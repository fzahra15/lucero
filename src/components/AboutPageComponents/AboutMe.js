import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutInfo } from '../../actions/MainActions'
import img from '../img/Group 4.png'
import img2 from '../img/Group 5.png'

function AboutMe() {
    const [click, setClick] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAboutInfo())
    }, [])
    const about = useSelector(state => state.Data.about)
    if (!about || !about.text) {
        // Handle the case where about data or text is not available
        return null;
    }

    // const aboutPartOne = about.text.substring(0, Math.floor(about.text.length / 2));
    // const aboutPartTwo = about.text.substring(Math.floor(about.text.length / 2));
    let aboutPartOne = '';
    let aboutPartTwo='';
    for(let i = 0; i< about.text?.split('</p>').length; i++){
        if(i< (about.text?.split('</p>').length/2)){
            aboutPartOne+=about.text?.split('</p>')[i]+'</p>'
        }else{
            aboutPartTwo+=about.text?.split('</p>')[i]+'</p>'
        }
        
    }
    return (
        <div className="about_me_flex">
            <div className="about_me_img">
                <img src={about.image_full_url} alt="" />
            </div>
            <div className="about_text_container">
                <div className="about_text">
                    {
                        click === true ? '' : <h3>{about.title}</h3>
                    }

                    {
                        click === true ? <div dangerouslySetInnerHTML={{ __html: aboutPartTwo }}></div>
                            : <div dangerouslySetInnerHTML={{ __html: aboutPartOne }}></div>
                    }


                </div>
                <div className="page_change">
                    {
                        click === true ? <img id='trueView' src={img2} alt="" /> : <img id="falseView" src={img} alt="" />
                    }

                    <img src="./img/Group 4.svg" id='false' alt="" />
                    {
                        click === true ? <svg id='trueBtn' onClick={() => setClick(false)} xmlns="http://www.w3.org/2000/svg" width="46" height="24" viewBox="0 0 46 24" fill="none">
                            <path d="M0.565057 10.2609C-0.188292 11.0177 -0.188292 12.2468 0.565057 13.0037L10.2079 22.6912C10.9613 23.448 12.1847 23.448 12.938 22.6912C13.6914 21.9343 13.6914 20.7052 12.938 19.9484L6.57979 13.5667L44.07 13.5667C45.1367 13.5667 45.9985 12.7009 45.9985 11.6292C45.9985 10.5576 45.1367 9.69175 44.07 9.69175L6.58581 9.69175L12.932 3.31011C13.6854 2.55327 13.6854 1.32417 12.932 0.56733C12.1787 -0.189506 10.9552 -0.189506 10.2019 0.56733L0.55903 10.2548L0.565057 10.2609Z" fill="#D9D9D9" />
                        </svg> : <svg onClick={() => setClick(true)} xmlns="http://www.w3.org/2000/svg" width="46" height="24" viewBox="0 0 46 24" fill="none">
                            <path
                                d="M45.4335 12.9979C46.1868 12.2411 46.1868 11.012 45.4335 10.2551L35.7906 0.567627C35.0373 -0.189209 33.8138 -0.189209 33.0605 0.567627C32.3071 1.32446 32.3071 2.55356 33.0605 3.3104L39.4187 9.69204H1.92857C0.861831 9.69204 0 10.5579 0 11.6295C0 12.7012 0.861831 13.567 1.92857 13.567H39.4127L33.0665 19.9487C32.3132 20.7055 32.3132 21.9346 33.0665 22.6915C33.8199 23.4483 35.0433 23.4483 35.7967 22.6915L45.4395 13.004L45.4335 12.9979Z"
                                fill="#D9D9D9" />
                        </svg>
                    }

                </div>
            </div>
        </div>
    )
}

export default AboutMe