import { data } from 'jquery';
import React, { useState, useEffect } from 'react';
import { getCertificates } from '../../actions/MainActions';

const Slider = ({ certificates }) => {
  const [slideCount, setSlideCount] = useState((certificates.length-1)); // Update with the actual number of slides
  const [slideWidth, setSlideWidth] = useState(500); // Update with the actual width of each slide
  const [sliderUlWidth, setSliderUlWidth] = useState(slideCount * slideWidth);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getCertificates()
  }, [])

  let myCertificates = certificates.filter(data => data.id != 6)

  useEffect(() => {
    setSliderUlWidth(slideCount * slideWidth);
  }, [slideCount, slideWidth]);

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slideCount - 1 : prevIndex - 1));
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slideCount - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="slider" style={{ width: slideWidth, height: 300 }}>
      <a className="control_prev" onClick={moveLeft}>
        {'<'}
      </a>
      <a className="control_next" onClick={moveRight}>
        {'>'}
      </a>
      <ul style={{ width: sliderUlWidth, marginLeft: -currentIndex * slideWidth }}>
        {
          myCertificates.map((data, i) => {
            return (
              <li>
                  <img src={data.image_full_url} />
              </li>
            )
          })

        }

      </ul>
    </div>
  );
};

export default Slider;
