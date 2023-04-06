import React from 'react'
import './header.css'
import CTA from "./CTA"
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { useTranslation } from 'react-i18next'


const Header = () => {

    const { t } = useTranslation()

    return (
        <header>
            <div className='container header__container'>
                <h5>{t('header.hello')}</h5>
                <h1>Nicolas Sanches Varela</h1>
                <h5 className='text-light'>{t('header.job')}</h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt='me' />
                </div>

                <a href='#contact' className='scroll__down'>{t('header.scroll')}</a>
            </div>
        </header>
    )
}

export default Header
