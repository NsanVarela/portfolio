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

                <div>
                    <h3>{t('experience.languages_title')}</h3>
                    <div className='experience__content'>
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
                                <h4>TypeScript</h4>
                                <small className='text-light'>{t('experience.intermediate')}</small>
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
                                <h4>HTML5</h4>
                                <small className='text-light'>{t('experience.experienced')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>CSS3</h4>
                                <small className='text-light'>{t('experience.confirmed')}</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div>
                    <h3>{t('experience.languages-frameworks_title')}</h3>
                    <div className='experience__content'>
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
                                <h4>Node</h4>
                                <small className='text-light'>{t('experience.experienced')}</small>
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
                                <h4>Twig</h4>
                                <small className='text-light'>{t('experience.confirmed')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Material UI</h4>
                                <small className='text-light'>{t('experience.experienced')}</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div>
                    <h3>{t('experience.sgbd_title')}</h3>
                    <div className='experience__content'>
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
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>PostgresSQL</h4>
                                <small className='text-light'>{t('experience.basic')}</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div>
                    <h3>{t('experience.tests_title')}</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Jest</h4>
                                <small className='text-light'>{t('experience.confirmed')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Mocha</h4>
                                <small className='text-light'>{t('experience.basic')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Cypress</h4>
                                <small className='text-light'>{t('experience.basic')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Cucumber</h4>
                                <small className='text-light'>{t('experience.basic')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Jenkins</h4>
                                <small className='text-light'>{t('experience.experienced')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Concourse</h4>
                                <small className='text-light'>{t('experience.experienced')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Docker</h4>
                                <small className='text-light'>{t('experience.experienced')}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Kubernetes</h4>
                                <small className='text-light'>{t('experience.experienced')}</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div>
                    <h3>{t('experience.work-environment_title')}</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Système d'exploitation</h4>
                                <small className='text-light'>Windows 10, </small>
                                <small className='text-light'>Linux</small>
                                <small className='text-light'>Mac OS</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Workflow</h4>
                                <small className='text-light'>Git, </small>
                                <small className='text-light'>Postman, </small>
                                <small className='text-light'>pg Admin, </small>
                                <small className='text-light'>Jira, </small>
                                <small className='text-light'>Confluence, </small>
                                <small className='text-light'>Trello</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon' />
                            <div>
                                <h4>Méthodologie</h4>
                                <small className='text-light'>Agile (SCRUM)</small>
                            </div>
                        </article>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience
