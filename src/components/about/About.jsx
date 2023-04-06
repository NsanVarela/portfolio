import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    const devWorkingDate = new Date('2018-10-01')
    const timeDifference = new Date() - devWorkingDate
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const number_of_month = Math.floor(number_of_days / 31)
    const number_of_years = Math.floor( number_of_month / 12)
    return (
        <section id='about'>
            <h5>{t('about.message')}</h5>
            <h2>{t('about.title')}</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About image' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>{t('about.experience')}</h5>
                            <small>{t('about.experience_years', { number_of_years })}</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>{t('about.clients')}</h5>
                            <small>{t('about.clients_number')}</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>{t('about.projects')}</h5>
                            <small>{t('about.projects_number')}</small>
                        </article>
                    </div>

                    <p>
                        {t('about.description')}
                    </p>

                    <a href='#contact' className='btn btn-primary'>{t('about.cta')}</a>
                </div>
            </div>
        </section>
    )
}

export default About
