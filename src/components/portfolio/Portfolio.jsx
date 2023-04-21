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

    const professionalProjects = [
        {
            id: 1,
            image: IMG1,
            logo: LOGO,
            title: t('portfolio.items.0.title'),
            github: 'https://github.com/StartupsPoleEmploi/mesevenementsemploi',
            demo: 'https://mesevenementsemploi.pole-emploi.fr/mes-evenements-emploi/evenements',
            hasLogo: true,
            isOpenSource: true,
            baseline: t('portfolio.items.0.baseline'),
            stack: {
                frontend: t('portfolio.items.0.stack.frontend', { joinArrays: ', ' }).split(', '),
                backend: t('portfolio.items.0.stack.backend', { joinArrays: ', ' }).split(', '),
                database: t('portfolio.items.0.stack.database', { joinArrays: ', ' }).split(', '),
                deployment_test: t('portfolio.items.0.stack.deployment_test', { joinArrays: ', ' }).split(', ')
            },
            front: t('portfolio.items.0.frontend'),
            back: t('portfolio.items.0.backend'),
            db: t('portfolio.items.0.database'),
            deployment: t('portfolio.items.0.deployment')
        },
        {
            id: 2,
            image: IMG2,
            logo: LOGO,
            title: t('portfolio.items.1.title'),
            github: '#',
            demo: 'https://salonenligne.pole-emploi.fr/candidat/',
            hasLogo: true,
            isOpenSource: false,
            baseline: t('portfolio.items.1.baseline'),
            stack: {
                frontend: t('portfolio.items.1.stack.frontend', { joinArrays: ', ' }).split(', '),
                backend: t('portfolio.items.1.stack.backend', { joinArrays: ', ' }).split(', '),
                database: t('portfolio.items.1.stack.database', { joinArrays: ', ' }).split(', '),
                deployment_test: t('portfolio.items.1.stack.deployment_test', { joinArrays: ', ' }).split(', ')
            },
            front: t('portfolio.items.1.frontend'),
            back: t('portfolio.items.1.backend'),
            db: t('portfolio.items.1.database'),
            deployment: t('portfolio.items.1.deployment')
        },
        {
            id: 3,
            image: IMG3,
            logo: LOGO,
            title: t('portfolio.items.2.title'),
            github: 'https://github.com/OSS-Pole-Emploi/TradEmploi',
            demo: 'https://trad.pole-emploi.fr/start',
            hasLogo: true,
            isOpenSource: true,
            baseline: t('portfolio.items.2.baseline'),
            stack: {
                frontend: t('portfolio.items.2.stack.frontend', { joinArrays: ', ' }).split(', '),
                backend: t('portfolio.items.2.stack.backend', { joinArrays: ', ' }).split(', '),
                database: t('portfolio.items.2.stack.database', { joinArrays: ', ' }).split(', '),
                deployment_test: t('portfolio.items.2.stack.deployment_test', { joinArrays: ', ' }).split(', ')
            },
            front: t('portfolio.items.2.frontend'),
            back: t('portfolio.items.2.backend'),
            db: t('portfolio.items.2.database'),
            deployment: t('portfolio.items.2.deployment')
        },
        {
            id: 4,
            image: IMG4,
            logo: LOGO,
            title: t('portfolio.items.3.title'),
            github: '#',
            demo: 'https://labonnecompetencepro.pole-emploi.fr/',
            hasLogo: true,
            isOpenSource: false,
            baseline: t('portfolio.items.3.baseline'),
            stack: {
                frontend: t('portfolio.items.3.stack.frontend', { joinArrays: ', ' }).split(', '),
                backend: t('portfolio.items.3.stack.backend', { joinArrays: ', ' }).split(', '),
                database: t('portfolio.items.3.stack.database', { joinArrays: ', ' }).split(', '),
                deployment_test: t('portfolio.items.3.stack.deployment_test', { joinArrays: ', ' }).split(', ')
            },
            front: t('portfolio.items.3.frontend'),
            back: t('portfolio.items.3.backend'),
            db: t('portfolio.items.3.database'),
            deployment: t('portfolio.items.3.deployment')
        }
    ]

    const personalProjects = [
        {
            id: 5,
            image: IMG5,
            logo: LOGO,
            title: t('portfolio.items.4.title'),
            github: 'https://github.com/NsanVarela/noBord-map',
            demo: 'https://map.nicolas-sanches-varela.com/',
            hasLogo: false,
            isOpenSource: true,
            baseline: t('portfolio.items.4.baseline'),
            stack: {
                frontend: t('portfolio.items.4.stack.frontend', { joinArrays: ', ' }).split(', '),
                backend: t('portfolio.items.4.stack.backend', { joinArrays: ', ' }).split(', '),
                database: t('portfolio.items.4.stack.database', { joinArrays: ', ' }).split(', '),
                deployment_test: t('portfolio.items.4.stack.deployment_test', { joinArrays: ', ' }).split(', ')
            },
            front: t('portfolio.items.4.frontend'),
            back: t('portfolio.items.4.backend'),
            db: t('portfolio.items.4.database'),
            deployment: t('portfolio.items.4.deployment')
        },
        {
            id: 6,
            image: IMG6,
            logo: LOGO,
            title: t('portfolio.items.5.title'),
            github: 'https://github.com/NsanVarela/demo-webrtc',
            demo: 'https://webrtc.nicolas-sanches-varela.com/',
            hasLogo: false,
            isOpenSource: true,
            baseline: t('portfolio.items.5.baseline'),
            stack: {
                frontend: t('portfolio.items.5.stack.frontend', { joinArrays: ', ' }).split(', '),
                backend: t('portfolio.items.5.stack.backend', { joinArrays: ', ' }).split(', '),
                database: t('portfolio.items.5.stack.database', { joinArrays: ', ' }).split(', '),
                deployment_test: t('portfolio.items.5.stack.deployment_test', { joinArrays: ', ' }).split(', ')
            },
            front: t('portfolio.items.5.frontend'),
            back: t('portfolio.items.5.backend'),
            db: t('portfolio.items.5.database'),
            deployment: t('portfolio.items.5.deployment')
        }
    ]

    return (
        <section id='portfolio'>
            <h5>{t('portfolio.message')}</h5>
            <h2>{t('portfolio.title')}</h2>

            <h3 className='portfolio__pro'>{t('portfolio.pro')}</h3>
            <div className='container portfolio__container'>
                {professionalProjects.map((item) => (
                    <PortfolioItem
                        key={item.id}
                        {...item}
                        baseline={t(item.baseline)}
                        stack={{
                            frontend: item.stack.frontend.map((value) => t(value)),
                            backend: item.stack.backend.map((value) => t(value)),
                            database: item.stack.database.map((value) => t(value)),
                            deployment: item.stack.deployment_test.map((value) => t(value)),
                        }}
                        front={item.front}
                        back={item.back}
                        db={item.db}
                        deployment={item.deployment}
                    />
                ))}
            </div>

            <h3 className='portfolio__perso'>{t('portfolio.perso')}</h3>
            <div className='container portfolio__container'>
                {personalProjects.map((item) => (
                    <PortfolioItem
                        key={item.id}
                        {...item}
                        baseline={t(item.baseline)}
                        stack={{
                            frontend: item.stack.frontend.map((value) => t(value)),
                            backend: item.stack.backend.map((value) => t(value)),
                            database: item.stack.database.map((value) => t(value)),
                            deployment: item.stack.deployment_test.map((value) => t(value)),
                        }}
                        front={item.front}
                        back={item.back}
                        db={item.db}
                        deployment={item.deployment}
                    />
                ))}
            </div>

        </section>
    )
}

export default Portfolio
