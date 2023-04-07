import React from 'react'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Slaider.css';
import Next from "../../UI/Icon/Next"
import Prev from "../../UI/Icon/Prev"


const Slaider = ({ slides }) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    let SwipSlides = slides.map((el, index) => {
        return <SwiperSlide key={index}>
            <img src={el} alt="Element Slaider" />
        </SwiperSlide>
    })
    return (
        <Swiper
            breakpoints={{
                998: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                }
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
        >
            {SwipSlides}
            <div className="prev" ref={navigationPrevRef}><Prev /></div>
            <div className="next" ref={navigationNextRef}> <Next /> </div>
        </Swiper>
    );
}

export default Slaider