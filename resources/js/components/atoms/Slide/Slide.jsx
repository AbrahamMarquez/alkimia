// import React from 'react'
// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slide.scss";

// import required modules
import { Pagination, Navigation, A11y } from "swiper";
import { useState } from "react";

const Slide = ({ object }) => {
    const [openModalQu, setOpenModalQu] = useState(false);

    const OpenShareModal = (id) => {
        if (openModalQu) {
            setOpenModalQu(false);
        } else {
            setOpenModalQu(id);
        }
    };
    return (
        <Swiper
            direction={"vertical"}
            navigation
            spaceBetween={10}
            slidesPerView={7}
            slidesPerGroup={7}
            modules={[Navigation, A11y]}
            className="mySwiper"
        >
            {object.map((ques) => (
                <SwiperSlide className="slidepor">
                    <div className="host-secct-3-card" key={ques.id}>
                        <p className="host-secct-3-question">{ques.question}</p>
                        <div
                            className="host-secct-3-plus"
                            onClick={() => setOpenModalQu(ques.id)}
                        >
                            <img
                                src={ques.icon}
                                alt="Icon"
                                className="host-secct-3-Icon"
                            />
                        </div>

                        <div
                            className={`infoQuestion ${
                                openModalQu == ques.id && "closeModal"
                            }`}
                        >
                            {ques.respose}
                            hola
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slide;
