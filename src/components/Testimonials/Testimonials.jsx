import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar-user-male.jpg'
import AVTR2 from '../../assets/avatar-user-male.jpg'
import AVTR4 from '../../assets/avatar-user-female.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {useTranslation} from "react-i18next";



const Testimonials = () => {

    const { t } = useTranslation()

    const data = [
        {
            id: 1,
            avatar: AVTR1,
            name: 'Daniel S.',
            job: t('testimonials.items.0.job'),
            company: t('testimonials.items.0.company'),
            review: t('testimonials.items.0.review')
        },
        {
            id: 2,
            avatar: AVTR2,
            name: 'Jaouad G.',
            job: t('testimonials.items.1.job'),
            company: t('testimonials.items.1.company'),
            review: t('testimonials.items.1.review')
        },
        {
            id: 3,
            avatar: AVTR4,
            name: 'Makamousso C.',
            job: t('testimonials.items.2.job'),
            company: t('testimonials.items.2.company'),
            review: t('testimonials.items.2.review')
        }
    ]

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
                    data.map((item) => {
                        return (
                            <SwiperSlide
                                key={item.id}
                                {...item} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={item.avatar} />
                                </div>
                                <h5 className='client__name'>{item.name}</h5>
                                <small>{item.job} {item.company}</small>
                                <small className='client__review'>
                                    {item.review}
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
