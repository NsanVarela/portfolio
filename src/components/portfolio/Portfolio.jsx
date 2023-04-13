import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/card-mes-evenements-emploi.png'
import IMG2 from '../../assets/card-salon-en-ligne.png'
import IMG3 from '../../assets/card-trad-emploi.png'
import IMG4 from '../../assets/card-la-bonne-competence-pro.png'
import IMG5 from '../../assets/card-map.png'
import IMG6 from '../../assets/card-webrtc.png'
import LOGO from '../../assets/logo-pe.jpg'
import {useTranslation} from 'react-i18next'

const data = [
    {
        id: 1,
        image: IMG1,
        logo: LOGO,
        title: 'Mes événements emploi',
        github: 'https://github.com/StartupsPoleEmploi/mesevenementsemploi',
        demo: 'https://mesevenementsemploi.pole-emploi.fr/mes-evenements-emploi/evenements',
        hasLogo: true,
        isOpenSource: true
    },
    {
        id: 2,
        image: IMG2,
        logo: LOGO,
        title: 'Salons en ligne de recrutement',
        github: '#',
        demo: 'https://salonenligne.pole-emploi.fr/candidat/',
        hasLogo: true,
        isOpenSource: false
    },
    {
        id: 3,
        image: IMG3,
        logo: LOGO,
        title: 'TradEmploi',
        github: 'https://github.com/OSS-Pole-Emploi/TradEmploi',
        demo: 'https://trad.pole-emploi.fr/start',
        hasLogo: true,
        isOpenSource: true
    },
    {
        id: 4,
        image: IMG4,
        logo: LOGO,
        title: 'La bonne compétence pro',
        github: '#',
        demo: 'https://labonnecompetencepro.pole-emploi.fr/',
        baseline: 'La Bonne Compétence Pro : un outil pour accélérer les recrutements des entreprises.',
        hasLogo: true,
        isOpenSource: false
    },
    {
        id: 5,
        image: IMG5,
        logo: LOGO,
        title: 'Map animation',
        github: 'https://github.com/NsanVarela/noBord-map',
        demo: 'https://map.nicolas-sanches-varela.com/',
        hasLogo: false,
        isOpenSource: true
    },
    {
        id: 6,
        image: IMG6,
        logo: LOGO,
        title: 'Communications en temps réel - WebRTC',
        github: 'https://github.com/NsanVarela/demo-webrtc',
        demo: 'https://realtime-communication-webrtc.osc-fr1.scalingo.io/',
        hasLogo: false,
        isOpenSource: true
    }
]

const Portfolio = () => {

    const { t } = useTranslation()

    return (
        <section id='portfolio'>
            <h5>{t('portfolio.message')}</h5>
            <h2>{t('portfolio.title')}</h2>

            <div className='container portfolio__container'>
                {
                    data.map(({id, image, logo, title, github, demo, hasLogo, isOpenSource}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>
                                {hasLogo && <img src={logo} alt='Logo Pôle emploi' className='portfolio__logo'/>}
                                {title}
                            </h3>
                            <div className='portfolio__item-cta'>
                                {isOpenSource && <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>}
                            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">{t('portfolio.demo')}</a>
                            </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
