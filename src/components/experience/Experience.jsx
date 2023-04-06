import React from 'react'
import './experience.css'
import {BsPatchCheck} from 'react-icons/bs'
import {useTranslation} from "react-i18next";

const Experience = () => {

    const { t } = useTranslation()

    return (
        <section id='experience'>
            <h5>{t('experience.message')}</h5>
            <h2>{t('experience.title')}</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>{t('experience.front_title')}</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>{t('experience.experienced')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>{t('experience.confirmed')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>{t('experience.intermediate')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>{t('experience.experienced')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Angular</h4>
                                <small className='text-light'>{t('experience.confirmed')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>{t('experience.basic')}</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>{t('experience.back_title')}</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>{t('experience.intermediate')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>ExpressJs</h4>
                                <small className='text-light'>{t('experience.intermediate')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>SpringBoot</h4>
                                <small className='text-light'>{t('experience.basic')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>{t('experience.basic')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>{t('experience.basic')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>{t('experience.basic')}</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
