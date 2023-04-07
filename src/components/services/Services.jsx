import React from 'react'
import './services.css'
import {useTranslation} from 'react-i18next'

const Services = () => {

    const { t } = useTranslation()

    return (
        <section id='services'>
            <h5>{t('services.message')}</h5>
            <h2>{t('services.title')}</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>{t('services.app-web-title')}</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <p>{t('services.app-web-content')}</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>{t('services.responsive-title')}</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <p>{t('services.responsive-content')}</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>{t('services.architecture-title')}</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <p>{t('services.architecture-content')}</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>{t('services.code-title')}</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <p>{t('services.code-content')}</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>{t('services.seo-accessibility-title')}</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <p>{t('services.seo-accessibility-content')}</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>{t('services.team-title')}</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <p>{t('services.team-content')}</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
