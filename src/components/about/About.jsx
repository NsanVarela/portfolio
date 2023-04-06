import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    const releaseDate = new Date('2023-04-04')
    const timeDifference = new Date() - releaseDate
    // const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>{t('about_me')}</h2>
            {/*<p>{t('days_since_release', { number_of_days })}</p>*/}

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
                            <h5>Experience</h5>
                            <small>4+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non maximus sem. Maecenas nisi felis, iaculis quis faucibus ultrices, aliquet id ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere dictum tortor, vulputate convallis turpis ornare auctor.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
