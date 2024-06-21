import React, { useEffect, useState } from 'react';
import NumerologyFirst from '../components/MainPageComponents.js/NumerologyFirst';
import MainCenter from '../components/MainPageComponents.js/MainCenter';
import { useDispatch, useSelector } from 'react-redux';
import { getActions } from '../actions/MainActions';
import img from '../img/8330264 1.png';
import SliderMain from '../components/MainPageComponents.js/SliderMain';
import Galery from '../components/MainPageComponents.js/Galery';
import Cases from '../components/MainPageComponents.js/Cases';
import BracletsContainer from '../components/MainPageComponents.js/BracletsContainer';

function MainPage() {
  const dispatch = useDispatch();
  const actions = useSelector((state) => state.Data.actions);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getActions());
    };

    fetchData();
  }, []);


 
  return (
    <main>
      <NumerologyFirst />
      <MainCenter />
      <div className="container">
        <div className="dashboard_end">
          <h2>Энергия чисел
            влияет на нашу
            судьбу сильнее,
            чем нам кажется!</h2>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="slider_action">
        <SliderMain actions={actions} />
      </div>
      <div className="container">
        <h2 className="section_header">Галерея</h2>
        <h3 className="section_title">Мероприятия</h3>
        <Galery />
        <h2 className="section_title">Кейсы</h2>
        <Cases />
        <h2 className="section_title">Образцы персональных браслетов</h2>
        <BracletsContainer />
      </div>

    </main>
  );
}

export default MainPage;
