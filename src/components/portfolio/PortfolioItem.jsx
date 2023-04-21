import { useState } from 'react'
import {useTranslation} from "react-i18next";

const PortfolioItem = (
    {
        id,
        image,
        logo,
        title,
        github,
        demo,
        hasLogo,
        isOpenSource,
        baseline,
        stack,
        front,
        back,
        db,
        deployment
    }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <article key={id} className='portfolio__item'>
            <div
                className='portfolio__item-image'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img src={image} alt={title} />
                {hovered && (
                    <div className='portfolio__item-hover'>
                        {baseline && (
                            <p  className='overlay__content-baseline'>
                                <strong className='overlay__content-baseline-title'>{title}</strong>
                                <p className='overlay__content-baseline-text'>{baseline}</p>
                            </p>
                        )}
                        {stack && (
                            <p className='overlay__content-stack'>
                                <strong className='overlay__content-stack-title'>stack</strong>
                                <ul className='overlay__content-stack-list'>
                                    <li><strong>{front}:&nbsp;</strong> {stack.frontend.join(', ')}</li>
                                    <li><strong>{back}:&nbsp;</strong>{stack.backend.join(', ')}</li>
                                    <li><strong>{db}:&nbsp;</strong>{stack.database.join(', ')}</li>
                                    <li><strong>{deployment}:&nbsp;</strong>{stack.deployment.join(', ')}</li>
                                </ul>

                            </p>
                        )}
                    </div>
                )}
            </div>
            <h3>
                {hasLogo && (
                    <img src={logo} alt='Logo Pôle emploi' className='portfolio__logo' />
                )}
                {title}
            </h3>
            <div className='portfolio__item-cta'>
                {isOpenSource && (
                    <a href={github} className='btn' target='_blank' rel='noreferrer'>
                        Github
                    </a>
                )}
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>
                    Demo
                </a>
            </div>
        </article>
    )
}

export default PortfolioItem
