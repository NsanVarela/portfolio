import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi";
import {useTranslation} from "react-i18next";

const Services = () => {

    const { t } = useTranslation()

    return (
        <section id='services'>
            <h5>{t('services.message')}</h5>
            <h2>{t('services.title')}</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>{t('services.list_title_one')}</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>{t('services.list_title_two')}</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>{t('services.list_title_three')}</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
