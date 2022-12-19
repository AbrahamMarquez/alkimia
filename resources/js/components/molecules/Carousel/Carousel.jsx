import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Controller } from "swiper";

 import Start from "../../../assets/icons/start.svg";

//Styles 🤞
import "./Carousel.scss";

const Carousel = ({object, device}) => {
    const [viewStart, setViewStart] = useState(5);

    console.log("desde el carrusel", device)

    const score = [
        {
            id: 1,
            img: Start,
        },
        {
            id: 2,
            img: Start,
        },
        {
            id: 3,
            img: Start,
        },
        {
            id: 4,
            img: Start,
        },
        {
            id: 5,
            img: Start,
        },
    ];

    const [desvice, setDesvice] = useState(window.innerWidth)

    return (
        <div className="container-carrousel-team">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"5"}
                initialSlide={2}
                slideToClickedSlide={true}
                coverflowEffect={{
                    rotate: 0,
                    // stretch: -100,
                    stretch: device,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation, Controller]}
                className="mySwiper"
            >
                {object.map((e, id) => (
                    <div key={id}>
                        <SwiperSlide key={id}>
                            <img src={e.img} className="Slide-img" />
                            <div className="Slide-prices-container">
                                <h1 className="Slide-price">{e.price}</h1>
                                <p className="Slide-priceReal">{e.priceReal}</p>
                            </div>
                            <div className="Slide-descr-container">
                                <span className="Slide-descr">{e.title}</span>
                            </div>
                            <div className="Slide-score">
                                {score.map(({ id, img }, idx) => {
                                    if (idx < viewStart) {
                                        return (
                                            
                                                <img
                                                    className="score-start"
                                                    src={img}
                                                    key={id}
                                                />
                                            
                                        );
                                    }
                                })}
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
