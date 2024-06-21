import React, { useEffect } from 'react'
import AboutMe from '../components/AboutPageComponents/AboutMe'
import AboutAdvantages from '../components/AboutPageComponents/AboutAdvantages'
import SliderSwiper from '../components/AboutPageComponents/SliderSwiper'
import { useDispatch, useSelector } from 'react-redux'
import { getCertificates } from '../actions/MainActions'
import Slider from '../components/AboutPageComponents/SliderSwiper'
import Certificates from '../components/AboutPageComponents/Certificates'

function AboutPage() {
  const dispatch = useDispatch()
  const certificates = useSelector(state => state.Data.certificates)
  useEffect(() => {
    dispatch(getCertificates())
  }, [])
  return (
    <main>
      <div className="container">
        <AboutMe />
        <h2 className="section_header">МОИ ПРЕИМУЩЕСТВА</h2>
        <AboutAdvantages />
        <h2 className="section_header">Cертификаты</h2>
        {/* <SliderSwiper certificates={certificates} /> */}
        <Certificates certificates={certificates}  />
      </div>


    </main>
  )
}

export default AboutPage