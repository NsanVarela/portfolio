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
import PortfolioItem from './PortfolioItem'



const Portfolio = () => {

    const { t } = useTranslation()

    const data = [
        {
            id: 1,
            image: IMG1,
            logo: LOGO,
            title: 'Mes événements emploi',
            github: 'https://github.com/StartupsPoleEmploi/mesevenementsemploi',
            demo: 'https://mesevenementsemploi.pole-emploi.fr/mes-evenements-emploi/evenements',
            hasLogo: true,
            isOpenSource: true,
            baseline: t('portfolio.items.0.baseline'),
            stack: {
                frontend: t('portfolio.items.0.stack.frontend', { joinArrays: ', ' }).split(', '),
                backend: t('portfolio.items.0.stack.backend', { joinArrays: ', ' }).split(', '),
                database: t('portfolio.items.0.stack.database', { joinArrays: ', ' }).split(', '),
                deployment: t('portfolio.items.0.stack.deployment', { joinArrays: ', ' }).split(', ')
            }
        },
        {
            id: 2,
            image: IMG2,
            logo: LOGO,
            title: 'Salons en ligne de recrutement',
            github: '#',
            demo: 'https://salonenligne.pole-emploi.fr/candidat/',
            hasLogo: true,
            isOpenSource: false,
            baseline: t('portfolio.items.1.baseline'),
            stack: {
                frontend: t('portfolio.items.1.stack.frontend', { joinArrays: ', ' }).split(', '),
                backend: t('portfolio.items.1.stack.backend', { joinArrays: ', ' }).split(', '),
                database: t('portfolio.items.1.stack.database', { joinArrays: ', ' }).split(', '),
                deployment: t('portfolio.items.1.stack.deployment', { joinArrays: ', ' }).split(', ')
            }
        },
/*        {
            id: 3,
            image: IMG3,
            logo: LOGO,
            title: 'TradEmploi',
            github: 'https://github.com/OSS-Pole-Emploi/TradEmploi',
            demo: 'https://trad.pole-emploi.fr/start',
            hasLogo: true,
            isOpenSource: true,
            baseline: 'Service de traduction instantanée pour aider les conseillers à accueillir les demandeurs allophones accessible depuis le bureau des conseillers, qui intègre une intelligence artificielle qui traduit, puis permet de faire une synthèse vocale par le conseiller en retour, dans la langue du demandeur.',
            stack: {
                frontend: ['Angular 10'],
                backend: ['Node 12', 'Google Cloud (Cloud Functions, Text-to-Speech, Speech-to-Text, Translation AI)'],
                database: ['Firebase'],
                deployment: ['Google App Engine']
            }
        },
        {
            id: 4,
            image: IMG4,
            logo: LOGO,
            title: 'La bonne compétence pro',
            github: '#',
            demo: 'https://labonnecompetencepro.pole-emploi.fr/',
            hasLogo: true,
            isOpenSource: false,
            baseline: 'Service en ligne qui permet aux recruteurs de localiser en 3 clics, les demandeurs d’emploi qui ont été récemment formés ou qui sont en cours de formation à une compétence qu\'ils recherchent. Il est possible de localiser les formations par région, département ou ville.',
            stack: {
                frontend: ['Angular 14'],
                backend: ['Java', 'Spring (Data, Cloud, Boot, Batch...)', 'JaCoCo', 'JUnit', 'Mockito', 'Hibernate'],
                database: ['PostgresSQL', 'Flyway'],
                deployment: ['Docker', 'Concourse']
            }
        },
        {
            id: 5,
            image: IMG5,
            logo: LOGO,
            title: 'Map animation',
            github: 'https://github.com/NsanVarela/noBord-map',
            demo: 'https://map.nicolas-sanches-varela.com/',
            hasLogo: false,
            isOpenSource: true,
            baseline: '',
            stack: {
                frontend: ['Angular 14'],
                backend: ['Java', 'Spring (Data, Cloud, Boot, Batch...)', 'JaCoCo', 'JUnit', 'Mockito', 'Hibernate'],
                database: ['PostgresSQL', 'Flyway'],
                deployment: ['Docker', 'Concourse']
            }
        },
        {
            id: 6,
            image: IMG6,
            logo: LOGO,
            title: 'Communications en temps réel - WebRTC',
            github: 'https://github.com/NsanVarela/demo-webrtc',
            demo: 'https://webrtc.nicolas-sanches-varela.com/',
            hasLogo: false,
            isOpenSource: true,
            baseline: '',
            stack: {
                frontend: ['Angular 14'],
                backend: ['Java', 'Spring (Data, Cloud, Boot, Batch...)', 'JaCoCo', 'JUnit', 'Mockito', 'Hibernate'],
                database: ['PostgresSQL', 'Flyway'],
                deployment: ['Docker', 'Concourse']
            }
        }*/
    ]

    return (
        <section id='portfolio'>
            <h5>{t('portfolio.message')}</h5>
            <h2>{t('portfolio.title')}</h2>

            <div className='container portfolio__container'>
                {data.map((item) => (
                    <PortfolioItem
                        key={item.id}
                        {...item}
                        baseline={t(item.baseline)}
                        stack={{
                            frontend: item.stack.frontend.map((value) => t(value)),
                            backend: item.stack.backend.map((value) => t(value)),
                            database: item.stack.database.map((value) => t(value)),
                            deployment: item.stack.deployment.map((value) => t(value)),
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

export default Portfolio
