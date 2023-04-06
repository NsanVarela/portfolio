import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/daniel-sengmanivanh.png'
import AVTR2 from '../../assets/fabien-godin.jpeg'
import AVTR3 from '../../assets/veronique-robert.jpeg'
import AVTR4 from '../../assets/makamousso-camara.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {useTranslation} from "react-i18next";

const data = [
    {
        avatar: AVTR1,
        name: 'Daniel Sengmanivanh',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non maximus sem. Maecenas nisi felis, iaculis quis faucibus ultrices, aliquet id ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere dictum tortor, vulputate convallis turpis ornare auctor.\n'
    },
    {
        avatar: AVTR2,
        name: 'Fabien Godin',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non maximus sem. Maecenas nisi felis, iaculis quis faucibus ultrices, aliquet id ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere dictum tortor, vulputate convallis turpis ornare auctor.\n'
    },
    {
        avatar: AVTR3,
        name: 'Veronique Robert',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non maximus sem. Maecenas nisi felis, iaculis quis faucibus ultrices, aliquet id ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere dictum tortor, vulputate convallis turpis ornare auctor.\n'
    },
    {
        avatar: AVTR4,
        name: 'Makamousso Camara',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non maximus sem. Maecenas nisi felis, iaculis quis faucibus ultrices, aliquet id ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere dictum tortor, vulputate convallis turpis ornare auctor.\n'
    }
]

const Testimonials = () => {

    const { t } = useTranslation()

    return (
        <section id='testimonials'>
            <h5>{t('testimonials.message')}</h5>
            <h2>{t('testimonials.title')}</h2>

            <Swiper className='container testimonials__container'
                // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }} >
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
