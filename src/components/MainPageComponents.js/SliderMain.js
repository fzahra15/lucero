import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function SliderMain({ actions }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const headerData = useSelector(state => state.Data.headerData)
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === actions.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? actions.length - 1 : prevSlide - 1));
    };

    return (
        <div className="slider_container">
            <div className="slider_left_btn" onClick={prevSlide}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="slider">
                <div className="slider-line" style={{ transform: `translateX(${-currentSlide * 1000}px)`, width: `${actions.length *1000}px` }}>
                    {actions.map((data, i) => (
                        <div key={i} className="slider_content_container">
                            <div className="slider_content">
                                <h4>{data.title}</h4>
                                <p dangerouslySetInnerHTML={{ __html: data.text }}></p>
                                <a href={headerData.whatsapp} target='_blank'><button>Заказать</button></a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="slider_right_btn" onClick={nextSlide}>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    );
}

export default SliderMain;
