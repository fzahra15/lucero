import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function BracletCardView({ braclets, setProdVisible }) {
    const viewGalleryId = useSelector(state => state.Data.viewGalleryId);
    const [currentSlide, setCurrentSlide] = useState(0);
    const myView = braclets.find(data => data.id == viewGalleryId)
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === myView.images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? myView.images.length - 1 : prevSlide - 1));
    };
    return (
        <div className="product-view-overlay">
            <div className="galery_prod_view_container">
                <div className="card_slider">
                    <div className="card_slider_line" style={{ transform: `translateX(${-currentSlide * 576}px)`, transition: 'ease all 1s' }}>
                        {
                            myView.images.map((data, i) => {
                                return (
                                    <div className="card_slider_line_img" key={i}>
                                        <img src={data.image_full_url} alt="" />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="circle_two">
                        <svg onClick={() => setProdVisible(false)} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path
                                d="M9.93628 12.8157C9.93628 12.5395 9.71242 12.3157 9.43628 12.3157L4.93628 12.3157C4.66014 12.3157 4.43628 12.5395 4.43628 12.8157C4.43628 13.0918 4.66014 13.3157 4.93628 13.3157L8.93628 13.3157L8.93628 17.3157C8.93628 17.5918 9.16014 17.8157 9.43628 17.8157C9.71242 17.8157 9.93628 17.5918 9.93628 17.3157L9.93628 12.8157ZM1.35355 21.6055L9.78983 13.1692L9.08273 12.4621L0.646447 20.8984L1.35355 21.6055Z"
                                fill="#C90" />
                            <path
                                d="M12.3113 9.43628C12.3113 9.71242 12.5351 9.93628 12.8113 9.93628L17.3113 9.93628C17.5874 9.93628 17.8113 9.71242 17.8113 9.43628C17.8113 9.16014 17.5874 8.93628 17.3113 8.93628H13.3113L13.3113 4.93628C13.3113 4.66014 13.0874 4.43628 12.8113 4.43628C12.5351 4.43628 12.3113 4.66014 12.3113 4.93628L12.3113 9.43628ZM20.894 0.646447L12.4577 9.08273L13.1648 9.78983L21.6011 1.35355L20.894 0.646447Z"
                                fill="#C90" />
                        </svg>
                    </div>
                    <svg onClick={prevSlide} className="card_left_btn" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <path
                            d="M45.25 23C45.25 35.2883 35.2883 45.25 23 45.25C10.7117 45.25 0.749994 35.2883 0.749996 23C0.749998 10.7117 10.7117 0.750002 23 0.750004C35.2883 0.750006 45.25 10.7117 45.25 23Z"
                            stroke="white" strokeWidth="1.5" />
                        <path
                            d="M7.41051 22.2929C7.01999 22.6834 7.01999 23.3166 7.41051 23.7071L13.7745 30.0711C14.165 30.4616 14.7982 30.4616 15.1887 30.0711C15.5792 29.6805 15.5792 29.0474 15.1887 28.6568L9.53183 23L15.1887 17.3431C15.5792 16.9526 15.5792 16.3195 15.1887 15.9289C14.7982 15.5384 14.165 15.5384 13.7745 15.9289L7.41051 22.2929ZM37.8823 22L8.11762 22L8.11762 24L37.8823 24L37.8823 22Z"
                            fill="#C90" />
                    </svg>
                    <svg onClick={nextSlide} className="card_right_btn" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <path
                            d="M0.749998 23C0.749999 10.7117 10.7117 0.750005 23 0.750006C35.2883 0.750007 45.25 10.7117 45.25 23C45.25 35.2883 35.2883 45.25 23 45.25C10.7117 45.25 0.749997 35.2883 0.749998 23Z"
                            stroke="white" strokeWidth="1.5" />
                        <path
                            d="M38.5895 23.7071C38.98 23.3166 38.98 22.6834 38.5895 22.2929L32.2255 15.9289C31.835 15.5384 31.2018 15.5384 30.8113 15.9289C30.4208 16.3195 30.4208 16.9526 30.8113 17.3431L36.4682 23L30.8113 28.6569C30.4208 29.0474 30.4208 29.6805 30.8113 30.0711C31.2018 30.4616 31.835 30.4616 32.2255 30.0711L38.5895 23.7071ZM8.11768 24L37.8824 24L37.8824 22L8.11768 22L8.11768 24Z"
                            fill="#C90" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default BracletCardView