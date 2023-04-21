import React, { useEffect } from 'react'
import {useTranslation} from 'react-i18next'
import i18n from 'i18next'
import { IconContext } from 'react-icons'
import cookies from 'js-cookie'
import 'flag-icon-css/css/flag-icons.min.css'
import { FaLanguage } from 'react-icons/fa'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const languages = [
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'es',
        name: 'Español',
        country_code: 'es',
    },
    /*{
        code: 'pt',
        name: 'Português',
        country_code: 'pt',
    },
    {
        code: 'ar',
        name: 'العربي',
        country_code: 'sa',
        dir: 'rtl'
    },
    {
        code: 'de',
        name: 'Deutsch',
        country_code: 'de',
    },*/
]

const App = () => {
    const { t } = useTranslation()
    const [open, setOpen] = React.useState(false);
    const currentLanguageCode = cookies.get('i18next') || 'fr'
    const currentLanguage = languages.find(l => l.code === currentLanguageCode)


    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
    }, [currentLanguage, t])

    return (
        <>
            <div className='dropdown' >
                <IconContext.Provider value={{ size: 20 }}>
                    <>
                        <button
                            onClick={() => setOpen(!open)}
                            className='btn btn-primary'
                        >
                            <FaLanguage />
                        </button>
                    </>
                </IconContext.Provider>
                {open && (
                    <div >
                        <ul className='dropdown__menu' >
                            <li className='dropdown__title disable' >{t('language')}</li>
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code} className="dropdown__menu-item" onClick={() => setOpen(false)}>
                                    <button onClick={() => i18n.changeLanguage(code)}
                                            disabled={code === currentLanguageCode}>
                                    <span className={`flag-icon dropdown__flag-icon flag-icon-${country_code}`}
                                          style={{ opacity: code === currentLanguageCode ? 0.5 : 1}}></span>
                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                )}
            </div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App
