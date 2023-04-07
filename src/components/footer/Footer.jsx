import React from 'react'
import './footer.css'
import {TiSocialLinkedin} from 'react-icons/ti'
import {useTranslation} from "react-i18next";

const Footer = () => {

    const { t } = useTranslation()

    return (
        <footer>
            <a href='#' className='footer__logo'>NICOLAS SANCHES VARELA</a>

            <ul className='permalinks'>
                <li><a href='#'>{t('footer.home')}</a></li>
                <li><a href='#about'>{t('footer.about')}</a></li>
                <li><a href='#experience'>{t('footer.experience')}</a></li>
                <li><a href='#services'>{t('footer.services')}</a></li>
                <li><a href='#portfolio'>{t('footer.portfolio')}</a></li>
                <li><a href='#testimonials'>{t('footer.testimonials')}</a></li>
                <li><a href='#contact'>{t('footer.contact')}</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='www.linkedin.com/in/nsanchesvarela'><TiSocialLinkedin /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; NsanV 2023. {t('footer.copyright')}.</small>
            </div>
        </footer>
    )
}

export default Footer
